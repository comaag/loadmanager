import scriptsTests from './scriptsTests';
import loadTests from './loadTests';


const multipleScripts = [
    {
        key: 'cdn-jquery-1',
        path: 'https://code.jquery.com/jquery-3.3.1.min.js',
        level: 1
    },
    {
        key: 'cdn-jquery-2',
        path: 'https://code.jquery.com/jquery-3.3.1.min.js',
        level: 2
    }
];

const singleScript = {
    key: 'cdn-threejs',
    path: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/99/three.min.js',
    level: 2
};

scriptsTests(multipleScripts, singleScript);
loadTests([...multipleScripts, singleScript]);


