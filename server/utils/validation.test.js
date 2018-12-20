const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const str = 123;
        expect(isRealString(str)).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        const str = '     ';
        expect(isRealString(str)).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        const str = '  AVG  ';
        expect(isRealString(str)).toBeTruthy();
    });
});