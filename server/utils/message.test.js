var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Hikaru';
    var text = 'Hey there';

    var result = generateMessage(from, text);

    expect(result).toInclude({ from, text });
    expect(result.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate location message', () => {
    var from = 'Hikaru';
    var url = 'http://google.com/maps?q=1,1';
    var longtitude = 1;
    var latitude = 1;
    var result = generateLocationMessage(from, latitude, longtitude);

    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({ from, url });
  });
});
