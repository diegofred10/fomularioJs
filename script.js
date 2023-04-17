const form = document.getElementById('registro-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const description = document.getElementById('description').value;
  const options = document.getElementById('options').value;
  const recommend = document.querySelector('input[name="recommend"]:checked')?.value;
  const knownLanguages = Array.from(document.querySelectorAll('input[name="known-languages"]:checked'))
    .map((checkbox) => checkbox.value);

  console.log('Nombre:', name);
  console.log('Email:', email);
  console.log('Edad:', age);
  console.log('Descripción:', description);
  console.log('Opción:', options);
  console.log('¿Recomendarías este sitio?:', recommend);
  console.log('Lenguajes y frameworks conocidos:', knownLanguages);
});
