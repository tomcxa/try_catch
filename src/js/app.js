/* eslint-disable import/prefer-default-export */
// TODO: write your code here
export function checkInput(input) {
    try {
        const num = parseInt(input, 10);
        if (Number.isNaN(num) || num === 0) {
            throw new Error('Ввод не верен');
        }
        return num;
    } catch (error) {
        return error;
    }
}
