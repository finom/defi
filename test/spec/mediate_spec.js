/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import mediate from 'src/mediate';

describe('mediate', () => {
    it('throws an error if an object is null', () => {
        expect(() => {
            mediate(null, 'a', String);
        }).toThrow();
    });

    it('mediates', () => {
        const obj = {};

        mediate(obj, 'a', v => Number(v));
        mediate(obj, ['b', 'c'], v => Number(v));

        obj.a = obj.b = obj.c = '123';

        expect(typeof obj.a).toEqual('number');
        expect(typeof obj.b).toEqual('number');
        expect(typeof obj.c).toEqual('number');
    });

    it('mediates using key-mediator object', () => {
        const obj = {};

        mediate(obj, {
            a: v => Number(v),
            b: v => Number(v)
        });

        obj.a = obj.b = '123';

        expect(typeof obj.a).toEqual('number');
        expect(typeof obj.b).toEqual('number');
    });
});
