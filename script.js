function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var display = document.getElementById('display');
        var resultado = eval(display.value);
        // Formata o resultado para exibir duas casas decimais
        display.value = resultado.toFixed(2);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    var display = document.getElementById('display');
    var value = parseFloat(display.value) / 100;
}

function power() {
    var display = document.getElementById('display');
    // Adiciona o símbolo de potenciação (^) ao valor atual
    display.value += '^';
}

function squareRoot() {
    var display = document.getElementById('display');
    // Adiciona o símbolo de radiciação (√) ao valor atual
    display.value += '√';
}