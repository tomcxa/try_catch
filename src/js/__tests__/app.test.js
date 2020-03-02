import { checkInput } from '../app';

test.each([
    ['12', 12],
    [null, Error('Ввод не верен')],
    ['', Error('Ввод не верен')],
    [' ', Error('Ввод не верен')],
    ['0XA', Error('Ввод не верен')],
])('should num', (input, expected) => {
    const result = checkInput(input);

    expect(result).toEqual(expected);
});
