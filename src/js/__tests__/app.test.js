import { checkInput } from '../app';

test.each([
    ['12', 12],
    [null, Error('Ввод не верен')],
    ['', Error('Ввод не верен')],
    [' ', Error('Ввод не верен')],
    ['0XA', 0],
])('should num', (input, expected) => {
    const result = checkInput(input);

    expect(result).toEqual(expected);
});
