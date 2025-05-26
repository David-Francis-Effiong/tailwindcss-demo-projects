import './input.css'  // Import your Tailwind CSS

// Your other JavaScript code here
document.getElementById('clickMe')?.addEventListener('click', () => {
  document.getElementById('message').textContent = 'Button clicked!';
});