const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/'];
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (item.id == 'equal' && display.innerText != '') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else if (item.id !== 'open' && item.id !== 'close') {
            display.innerText += item.id;
        }
    }
});

// Taking input through keyboard
document.addEventListener('keydown', (event) => {
    if (event.key == 'c' || event.key == 'C') {
        display.innerText = '';
    } else if (event.key == 'Backspace') {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
    } else if ((event.key == '=' || event.key == 'Enter') && display.innerText != '') {
        display.innerText = eval(display.innerText);
    } else if (display.innerText == '' && (event.key == '=' || event.key == 'Enter')) {
        display.innerText = 'Empty!';
        setTimeout(() => (display.innerText = ''), 2000);
    } else if (numbers.includes(event.key)) {
        display.innerText += event.key.toString();
    }
});

