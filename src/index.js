
class loadManager {
    constructor(options) {
        this.level = 0;

        this.scripts = [];

        this.listener = {};

        this.scriptListener;

        this.options = {
            ...{
                explicit: false,
                no_cookie: false
            }, 
            ...options
        };

        this.on('complete', () => this.ready())
    }

    setScripts(scripts = null) {
        if(scripts && Array.isArray(scripts)) {
            scripts.forEach((script) => this.addScript(script))
        }
    }

    getScripts(level = -1) {
        if(level === -1) return this.scripts;
        if(level === 0) return [];
        return this.scripts.filter((script) => script.level <= level);
    }

    addScript({key, path, level = 1, position = 'body'}) {
        this.scripts.push({
            key: key,
            path: path,
            level: level,
            position: position
        });
    }

    clearScripts() {
        this.scripts = [];
    }

    setLevel(level) {
        this.level = level;

        // set cookie
        let d = new Date;
        let days = 100;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = "_lm_level=" + level + ";path=/;expires=" + d.toGMTString();
    }

    getLevel() {
        // get from cookie
        let value = document.cookie.match('(^|;) ?_lm_level=([^;]*)(;|$)');
        let level = value ? value[2] : null;

        return parseInt(level || this.level);
    }
 
    // Load
    load(level = -1) {
        this.setLevel(level);

        if(level == 0) return;

        let scripts = this.getScripts(level);

        scripts.forEach((script) => this.addToDom(script));

        let counter = 0;
        let checkComplete = () => {
            counter++;
            if(counter >= scripts.length) {
                this.emit('completed');
            }
        }
        this.on('loaded', () => checkComplete())
        this.on('error', () => checkComplete())
    }

    addToDom(data) {
        if(data.loaded) return;

        let script = document.createElement('script');
        script.src = data.path;
        script.setAttribute('id', data.key);
        script.addEventListener('load', (event) => {
            this.emit('loaded', data);
            data.loaded = true;
        });
        script.addEventListener('error', (event) => {
            this.emit('error', data);
            data.loaded = false;
        });
        
        if(data.position == 'body') {
            document.body.appendChild(script);    
        }
        else {
            document.head.appendChild(script);
        }   
    }

    // SCRIPT LISTENERS
    whenever(key) {
        return new Promise(function(resolve, reject) {
            if(this.scripts.filter((script) => script.key === key && script.loaded === true).length >= 1) {
                resolve()
            }
            else {
                this.scriptListener[key].push(resolve);
            }
        });
    }

    has(key) {
        return new Promise(function(resolve, reject) {
            if(this.scripts.filter((script) => script.key === key && script.loaded === true).length >= 1) {
                resolve();
            }
            else {
                reject();
            }
        });
    }

    ready() {
        for(let key in this.scriptListener) {
            this.scriptListener[key].forEach((callback) => callback());
        }
    }

    // EVENT HANDLING
    on(name, callback) {
        if(!this.listener[name]) {
            this.listener[name] = [];
        }
        this.listener[name].push(callback);
    }

    emit(name, data) {
        if(!this.listener[name]) return;
        this.listener[name].foreach((listener) => listener(data));
    }



}

export default loadManager;