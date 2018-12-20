const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMassage', () => {
    it('should generate correct message object', () => {
        const from = 'Avigii';
        const text = 'Hello test';

        const messageObject = generateMessage(from, text);

        expect(messageObject).toMatchObject({from, text});
        expect(typeof messageObject.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const latitude = 35;
        const longitude = 31;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const from = 'Avicii';

        const locationObject = generateLocationMessage(from, latitude, longitude);

        expect(typeof locationObject.createdAt).toBe('number');
        expect(locationObject).toMatchObject({
            from,
            url
        });
    });
});