const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMassage', () => {
    it('should generate correct message object', () => {
        const from = 'Avigii';
        const text = 'Hello test';

        const messageObject = generateMessage(from, text);

        expect(messageObject).toMatchObject({from, text});
        expect(typeof messageObject.createdAt).toBe('number');
    });
});