/*!
 * name: @jswork/next-dd-promisfy-all
 * description: Promisifies the entire object for next.
 * homepage: https://github.com/afeiship/next-dd-promisfy-all
 * version: 1.0.0
 * date: 2020-11-21 09:50:22
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxDdPromisfy = nx.ddPromisfy || require('@jswork/next-dd-promisfy');
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
