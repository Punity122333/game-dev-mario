const title = document.getElementById('title');
const button = document.getElementById('change-text');

button.addEventListener('click', () => {
  title.textContent = 'DOM updated successfully!';
});
