(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxDdPromisfy = nx.ddPromisfy || require('@feizheng/next-dd-promisfy');
  var DEFAULT_OPTIONS = { suffix: '', intrusive: false };

  nx.ddPromisfyAll = function (inSource, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var methods = Object.keys(inSource);
    var target = options.intrusive ? inSource : {};
    methods.forEach(function (name) {
      var promisy = nxDdPromisfy(inSource[name], { context: inSource });
      target[name + options.suffix] = promisy;
    });
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ddPromisfyAll;
  }
})();
