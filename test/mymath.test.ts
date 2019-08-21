import { MyMath } from '../src/typescript/mymath';

test('basic', () => {
    expect(MyMath.sum(0)).toBe(0);
});