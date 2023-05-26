document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.login-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let elements = form.elements;
      let formData = {};

      let hasBlankFields = false;
      for (let i = 0; i < elements.length; i++) {
        let input = elements[i];
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