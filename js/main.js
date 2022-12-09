// $(document).ready(function() {
    // весь код
// });
// прогрузка всего НТМЛ для дальнейшей с ним работы
// или
// $(function() {
    
// });

let buttons = document.querySelector('.buttons');

const calculator = function (event) {
    let targ = event.target;
    let targVal = event.target.dataset.val;
    let display = document.querySelector('.display');
    let dispVal = display.innerHTML;
    let num = '';

    if(display.innerHTML[display.innerHTML.length -1] === '-' && !event.target.closest('.number')){
        return;
    }

    if(display.innerHTML[display.innerHTML.length -1] === '+' && !event.target.closest('.number')){
        return;
    }

    if(display.innerHTML[display.innerHTML.length -1] === '*' && !event.target.closest('.number')){
        return;
    }
    
    if(display.innerHTML[display.innerHTML.length -1] === '**' && !event.target.closest('.number')){
        return;
    }

    if(display.innerHTML[display.innerHTML.length -1] === '/' && !event.target.closest('.number')){
        return;
    }

    if (!targ.closest('.btn')) return;
    
    if(targVal !== 'plusOrMin') {
        num = event.target.dataset.val;
    }

    
    if(targVal == 'plusOrMin') {
        if(dispVal[0] === '-') {
            display.innerHTML = dispVal.slice(1);
        } else {
            display.innerHTML = `-${dispVal}`;
        }
    }

    if (!targ.closest('.equal')) {
        display.innerHTML += num;
    }

    if (targ.closest('.equal')) {
        display.innerHTML = eval(display.innerHTML); 
    };
    

    if(targ.closest('.clear')) {
        display.innerHTML = '';
    };
}

buttons.addEventListener('click', calculator);