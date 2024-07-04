// Select the button element
const button = document.getElementById('btn');

// Function to get a random position within the window bounds
function getRandomPosition() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Calculate random position ensuring the button stays within the window bounds
  const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

  return { x: randomX, y: randomY };
}

// Event listener for mousemove event
button.addEventListener('mousemove', () => {
  const newPosition = getRandomPosition();
  button.style.position = 'absolute';
  button.style.left = `${newPosition.x}px`;
  button.style.top = `${newPosition.y}px`;
});

// Event listener for click event to show the alert
button.addEventListener('click', () => {
  alert("Congratulations! You caught me. :)");
});