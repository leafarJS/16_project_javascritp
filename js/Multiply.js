'use strict';
const d = document;
const ls = localStorage;
//
export default function multiply(question, form, input, scores) {
  let score = JSON.parse(ls.getItem('score'));

  if (!score) {
    score = 0;
  }

  const _question = d.getElementById(question);
  const _form = d.querySelector(form);
  const _input = d.getElementById(input);
  const _score = d.getElementById(scores);

  const num = Math.ceil(Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 20);

  _question.innerText = `
    ¿What is ${num} multiply by ${num2}?
  `;
  _score.innerText = `Score: ${score}`;

  const correctAnswer = num * num2;

  _form.addEventListener('submit', () => {
    const userAnswer = parseInt(_input.value);

    //console.log(userAnswer, typeof userAnswer);
    if (userAnswer === correctAnswer) {
      score++;
      updateLocalStore();
    } else {
      score--;
      updateLocalStore();
    }
  });

  function updateLocalStore() {
    ls.setItem('score', JSON.stringify(score));
  }
}
