import {transform} from '../src/romanizer'

describe('transform', () => {
    it('should_transform_number', () => {
        const result = transform(10);

        expect(result).toEqual('X');
    })
});