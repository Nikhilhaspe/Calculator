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

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
const close = document.getElementById('close');
const modal_container = document.getElementById('modal-container');
const open = document.getElementById('open');

let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
    if (isDark)
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon mr"></i>';
    else
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun mr"></i>';
};

open.addEventListener('click', () => {
    modal_container.classList.add('show');
    document.body.classList.add('opacity');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    document.body.classList.remove('opacity');
});