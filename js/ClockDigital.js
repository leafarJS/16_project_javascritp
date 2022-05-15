'use strict';
const d = document; //

export default function clockDigital(hour, minute, second, ampm) {
  const _hour = d.querySelector(hour);
  const _minute = d.querySelector(minute);
  const _second = d.querySelector(second);
  const _ampm = d.getElementById(ampm);

  function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if (h > 12) {
      h = h - 12;
      ampm = 'PM';
    }
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    _hour.innerText = h;
    _minute.innerText = m;
    _second.innerText = s;
    _ampm.innerText = ampm;
  }

  setInterval(() => {
    updateClock();
  }, 1000);
}
