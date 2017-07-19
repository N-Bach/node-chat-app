var expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Hikaru';
    var text = 'Hey there';

    var result = generateMessage(from, text);

    expect(result).toInclude({ from, text });
    expect(result.createdAt).toBeA('number');
  });
});
