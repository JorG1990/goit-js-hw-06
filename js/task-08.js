document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.login-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      var elements = form.elements;
      var formData = {};

      var hasBlankFields = false;
      for (var i = 0; i < elements.length; i++) {
        var input = elements[i];
        if (input.type !== 'submit' && input.value.trim() === '') {
          hasBlankFields = true;
          break;
        }
        formData[input.name] = input.value;
      }

      if (hasBlankFields) {
        alert('Todos los espacios deben ser rellenados.');
      } else {
        console.log(formData);
        form.reset();
      }
    });
  });