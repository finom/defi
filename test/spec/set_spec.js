/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import set from 'src/set';

describe('set', () => {
    it('throws an error if an object is null', () => {
        expect(() => {
            set(null, 'x', 1);
        }).toThrow();
    });

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

    it('does not throw if key is falsy', () => {
        expect(() => {
            set({}, null, 1);
        }).not.toThrow();
    });
});
