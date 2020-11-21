(function () {
  require('../src');
  const dd = require('dingtalk-jsapi');

  describe('api.basic test', () => {
    test('nx.ddPromisfyAll should create the same apis when suffix is empty', function () {
      var apis = nx.mix(
        null,
        dd.device.audio,
        dd.device.base
      );

      var target = nx.ddPromisfyAll(apis);
      expect(
        Object.keys(apis)
      ).toEqual(
        Object.keys(target)
      );
    });
  });
})();
