# The Load Manager
A JS Load Manager for third party scripts. You could easily manage third party scripts in your code.

## Usage

First of all you have to register all your third party scripts.

### ES6 way

    import loadManager from 'loadmanager';
    let manager = new loadManager();

#### Register Scripts
register the thirdparty scripts and cluster them in privacy security levels (`1,2,3`) [Read the definiton](#levels)

    manager.setScripts([
        {
            key: 'unique-key',
            path: '/path/to/library.js',
            level: 1,
            position: 'head' 
            onRequest: false
        }
    ]);

- `key` : is the unique key for the script. it will be used to identify the script.
- `path` : is the path or url to the script
- `level` : defines the security level of the script (default: `1`) [Read the definition](#levels)
- `position` : set the position where the script should be integrated `head` or `body` (default: `body`)
- `onRequest` : `false` - whenever the `load` method will be called. `true` - whenever you call the `whenever` method (default: `false`)

if you want to add a single script later in your script or have some conditions to be true, you could also use:

    manager.addScript({
        key: 'unique-key',
        path: '/path/to/library.js',                    
        level: 1
    })

if you want to clear the scripts, you could use:

    manager.clearScripts();

#### Load the scripts
Trigger the loading of scripts which has a lower or equal level than given:

    manager.load(2)

if you just call `manager.load()` it will use the value of the cookie `_lm_level` or the default value, which is `-1`;

Example:

    document.querySelector('a.cookie-accepted').addEventListener('click', (e) => {
        e.preventDefault();
        // load all other third party libraries without caring about the levels
        manager.load(-1) 
    })

> the `load(int level)` method will set a cookie including the given value called `_lm_level`. if you want to avoid that you could set the option `no_cookie` to true on initialization of the loadManager

#### Levels <a name="levels"></a>
The levels are defined as:

- `-1` : load everything from the scripts object
- `0` : load nothing form the scripts object
- `1` : load scripts with the level 1
- `2` : load scripts with the level lower or equal 2
- `n` : load scripts with the level lower or equal n

> if you want to have explicit only a specific level and not the levels below you could set the `explicit` option to `true`

If you want to check the current level, you could use this method:

    let storedLevel = manager.getLevel(); 

if you wanna set the level without triggering the loading process, you could use this method:

    manager.setLevel(1)

if you wanna clear the level and the cookie which is related to the level you could use:

    manager.clearLevel()


#### Usage in your script

Whenever you have to use the library and you do not really know if the library is there or isn't loaded yet you can use this:

    manager.whenever('unique-key')
        .then(() => {
            // do your stuff
        })

> it will excute **whenever** the library is loaded. 

If you just want to check if the library is availble you could use this:

    manager.has('unique-key')
        .then(() => { 
            // do your stuff
        })
        .catch(() => {
            // do stuff without the library
        })

#### Events

> Events are triggered on the `document` element.

##### 1. loaded

The ``script` object does have the same values that you configured in the setScripts method

    manager.on('loaded', (script) => {
        // do your stuff
    })

##### 2. complete

Will be called when all scripts are loaded.

    manager.on('complete', () => {
        // do your stuff
    })

