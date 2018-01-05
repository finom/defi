/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import set from 'src/set';

describe('set', () => {
    it('sets', () => {
        const obj = {};
        set(obj, 'x', 42);
        expect(obj.x).toEqual(42);

        set(obj, {
            y: 1,
            z: 2
        });
        expect(obj.y).toEqual(1);
        expect(obj.z).toEqual(2);
    });
});
