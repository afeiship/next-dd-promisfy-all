const nx = require('@feizheng/next-js-core2');
const dd = require('dingtalk-jsapi');
require('../src/next-dd-promisfy-all');

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
