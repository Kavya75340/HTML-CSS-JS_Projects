function inputvalue(value) {
    document.getElementById('result').value += value;
}
function clearResult() {
    document.getElementById('result').value = '';
}
function CalculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (e) {
        resultField.value = 'Error'
    }
}