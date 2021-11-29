const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="key">${
    e.key === '' ? 'space' : e.key
  } <small>event.key</small></div>
  <div class="key">${e.keyCode} <small>event.keyCode</small></div>
  <div class="key">${e.code} <small>event.Code</small></div>
  <div class="key">Press any Key to get the code</div>
   `
})
