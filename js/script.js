'use strict';
const d = document;
const w = window;

import clockDigital from './ClockDigital.js';
import multiply from './Multiply.js';

d.addEventListener('DOMContentLoaded', (e) => {
  multiply(
    'question-multiply',
    '.form-multiply',
    'input-multiply',
    'score-multiply'
  );
  clockDigital('.hour', '.minute', '.second', 'ampm');
});
