let expression = '';

function cl() {
    expression = '';
    document.getElementById('screen').innerHTML = '';
    document.getElementById('screen').style.fontSize = '36px'; 
    document.getElementById('screen').style.color = '#0f0';
}

function del() {
    expression = expression.slice(0, -1);
    document.getElementById('screen').innerHTML = formatDisplay(expression);
}

function append(value) {
    expression += value;
    document.getElementById('screen').innerHTML = formatDisplay(expression);
}

function calculate() {
    try {
        let result = eval(expression);
        if (result === undefined || isNaN(result)) {
            result = 'Error';
        }
        document.getElementById('screen').innerHTML = formatDisplay(result, true);
        document.getElementById('screen').style.fontSize = '36px'; 
        document.getElementById('screen').style.color = '#0f0';
        expression = result; 
    } catch (e) {
        document.getElementById('screen').innerHTML = 'Error';
        document.getElementById('screen').style.fontSize = '36px'; 
        document.getElementById('screen').style.color = '#0f0'; 
    }
}

function formatDisplay(value, isResult = false) {
    if (isResult) {
    
        return `<span style="font-size: 36px; color: #0f0;">${value}</span>`;
    } else {
       
        return `<span style="font-size: 24px; color: #aaa;">${value}</span>`;
    }
}
