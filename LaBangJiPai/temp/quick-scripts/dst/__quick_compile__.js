
(function () {
var scripts = [{"deps":{"./assets/Script/ThirdPage/TEXT_tipKnowledge":1,"./assets/Script/FirstPage/cuyu":2,"./assets/Script/Prefab/passLevel":3,"./assets/Script/tutorialPage/dialog":4,"./assets/Script/SecondPage/gotoThird":5,"./assets/Script/fitResolution":6,"./assets/Script/isJump/preLoadJsjump":7,"./assets/Script/ThirdPage/InitateLoading":8,"./assets/Script/ThirdPage/changeBlockSize":9,"./assets/Script/ThirdPage/gotoFirst":10,"./assets/Script/ThirdPage/garbageDictionary":11,"./assets/Script/ThirdPage/gotoNextLevel":12,"./assets/Script/ThirdPage/returnButton":13,"./assets/Script/ThirdPage/onButtonClick":14,"./assets/Script/ThirdPage/musicCloseButton":15,"./assets/Script/ThirdPage/tipKnowledgeNodeOn":16,"./assets/Script/ThirdPage/tipPhoto":17,"./assets/Script/ThirdPage/Initate":18,"./assets/Script/ThirdPage/changeLifeSprite":19,"./assets/Script/ThirdPage/tipPage":20,"./assets/Script/preLoadScene":22,"./assets/Script/ThirdPage/loadWait":23,"./assets/Script/ThirdPage/preLoadThir":24,"./assets/Script/tutorialPage/tipPicture":25,"./assets/Script/isJump/yes":26,"./assets/Script/tutorialPage/preLoadTurpage":27,"./assets/Script/ThirdPage/tipKnowledgeChangeSprite":21,"./assets/Script/FirstPage/carButton":28,"./assets/Script/FirstPage/gotoSecond":29,"./assets/Script/FirstPage/hideGarbage":30,"./assets/Script/FirstPage/gameTypeManage":31,"./assets/Script/FirstPage/qiTa":32,"./assets/Script/FirstPage/keHuiShou":33,"./assets/Script/FirstPage/preLoadFirstPage1":34,"./assets/Script/FirstPage/loadSubpackage":35,"./assets/Script/FirstPage/carButtonCont":36,"./assets/Script/FirstPage/youHai":37},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/TEXT_tipKnowledge.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/cuyu.js"},{"deps":{},"path":"preview-scripts/assets/Script/Prefab/passLevel.js"},{"deps":{},"path":"preview-scripts/assets/Script/tutorialPage/dialog.js"},{"deps":{},"path":"preview-scripts/assets/Script/SecondPage/gotoThird.js"},{"deps":{},"path":"preview-scripts/assets/Script/fitResolution.js"},{"deps":{},"path":"preview-scripts/assets/Script/isJump/preLoadJsjump.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/InitateLoading.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/changeBlockSize.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/gotoFirst.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/garbageDictionary.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/gotoNextLevel.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/returnButton.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/onButtonClick.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/musicCloseButton.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/tipKnowledgeNodeOn.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/tipPhoto.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/Initate.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/changeLifeSprite.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/tipPage.js"},{"deps":{"TEXT_tipKnowledge":1},"path":"preview-scripts/assets/Script/ThirdPage/tipKnowledgeChangeSprite.js"},{"deps":{},"path":"preview-scripts/assets/Script/preLoadScene.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/loadWait.js"},{"deps":{},"path":"preview-scripts/assets/Script/ThirdPage/preLoadThir.js"},{"deps":{},"path":"preview-scripts/assets/Script/tutorialPage/tipPicture.js"},{"deps":{},"path":"preview-scripts/assets/Script/isJump/yes.js"},{"deps":{},"path":"preview-scripts/assets/Script/tutorialPage/preLoadTurpage.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/carButton.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/gotoSecond.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/hideGarbage.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/gameTypeManage.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/qiTa.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/keHuiShou.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/preLoadFirstPage1.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/loadSubpackage.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/carButtonCont.js"},{"deps":{},"path":"preview-scripts/assets/Script/FirstPage/youHai.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

if (typeof global === 'undefined') {
    window.global = window;
}

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;
        
            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
        
            return path;
        });

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    