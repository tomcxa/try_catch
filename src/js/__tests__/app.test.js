import { checkInput } from '../app';

test.each([
    ['12', 12],
    ['ololo', Error('Ввод не является числом')],
])('should num', (input, expected) => {
    const result = checkInput(input);

    expect(result).toEqual(expected);
});
