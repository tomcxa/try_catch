/* eslint-disable import/prefer-default-export */
// TODO: write your code here
export function checkInput(input) {
    try {
        const num = Number(input);
        if (Number.isNaN(num)) {
            throw new Error('Ввод не является числом');
        }
        return num;
    } catch (error) {
        return error;
    }
}
