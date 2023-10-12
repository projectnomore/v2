javascript:(function() {
  var consoleUI = document.createElement('div');
  consoleUI.style.position = 'fixed';
  consoleUI.style.bottom = '0';
  consoleUI.style.left = '0';
  consoleUI.style.width = '100%';
  consoleUI.style.backgroundColor = '#333';
  consoleUI.style.color = '#fff';
  consoleUI.style.fontFamily = 'monospace';
  consoleUI.style.padding = '10px';
  consoleUI.style.zIndex = '9999';

  var input = document.createElement('input');
  input.style.width = '100%';
  input.style.padding = '5px';
  input.style.border = 'none';
  input.style.backgroundColor = '#444';
  input.style.color = '#fff';
  input.style.fontFamily = 'monospace';
  input.style.fontSize = '14px';
  input.placeholder = 'Type JavaScript code here and press Enter';

  var output = document.createElement('div');
  output.style.overflowY = 'auto';
  output.style.maxHeight = '200px';
  output.style.padding = '5px';
  output.style.marginTop = '10px';
  output.style.backgroundColor = '#222';

  consoleUI.appendChild(input);
  consoleUI.appendChild(output);
  document.body.appendChild(consoleUI);

  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      var code = input.value;
      input.value = '';
      executeCode(code);
    }
  });

  function executeCode(code) {
    try {
      var result = eval(code);
      output.innerHTML += '<p>> ' + code + '</p>';
      if (result !== undefined) {
        output.innerHTML += '<p>' + result + '</p>';
      }
    } catch (error) {
      output.innerHTML += '<p style="color: red;">' + error + '</p>';
    }
    output.scrollTop = output.scrollHeight;
  }
})();
