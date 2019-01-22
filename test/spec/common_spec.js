/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import defi from 'src';

describe('common tests', () => {
    it('includes all documented members', () => {
        [
            'bindNode', 'bound', 'calc', 'chain', 'lookForBinder', 'set',
            'mediate', 'off', 'on', 'remove', 'trigger', 'unbindNode'
        ].forEach((methodName) => {
            expect(typeof defi[methodName]).toEqual('function');
        });

        expect(typeof defi.defaultBinders[0]).toEqual('function');
    });
});
