

describe('dragOver binder', () => {
    it('bound property gets correct values on corresponding events', () => {
        expect(obj.dragovered).toEqual(false, 'should become false on dragleave');
    });
});
