import $ from 'jquery';
import calc from './calculator';
import icon from './icon.png';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const app = $('#app');
    const container = $('<div class="container"></div>').appendTo(app);
    const iconDiv = $(`<div class="icon"><img src="${icon}" /></div>`).appendTo(container);
    const formDiv = $('<div class="form"></div>').appendTo(container);
    const answerDiv = $('<div class="answer"></div>').appendTo(container);
    const inputA = $('<input type="number" />').appendTo(formDiv);
    const sign = $('<span> + </span>').appendTo(formDiv);
    const inputB = $('<input type="number" />').appendTo(formDiv);
    const button = $('<button>Calculate</button>').appendTo(formDiv);

    inputA.val(1);
    inputB.val(2);

    button.click(() => {
        const a = Number(inputA.val());
        const b = Number(inputB.val());
        const answer = calc.add(a, b);
        answerDiv.text(`Answer of ${a} + ${b} is ${answer}`);
    })
});