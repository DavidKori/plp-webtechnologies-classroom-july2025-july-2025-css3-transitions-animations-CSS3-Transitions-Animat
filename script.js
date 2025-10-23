// --- Part 2: Functions demonstrating scope, parameters, return values ---

// Global counter variable
let counter = 0;

/**
 * Increments the global counter and returns the new value
 * @returns {number} New counter value
 */
function incrementCounter() {
  counter++;
  return counter;
}

/**
 * Adds two numbers and returns the sum
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Toggles a class on an element by ID
 * @param {string} elementId 
 * @param {string} className 
 */
function toggleClass(elementId, className) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.classList.toggle(className);
}

// --- Part 1 & 3: Event listeners for animation and interaction ---

// Pulse animation toggle button
const pulseBtn = document.getElementById('pulseBtn');
pulseBtn.addEventListener('click', () => {
  toggleClass('pulseBtn', 'pulsing');
});

// Animate box when clicked button
const animatedBox = document.getElementById('animatedBox');
pulseBtn.addEventListener('click', () => {
  toggleClass('animatedBox', 'animate-transform');
});

// Counter increment button and display
const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');

incrementBtn.addEventListener('click', () => {
  const newVal = incrementCounter();
  counterValue.textContent = newVal;
});

// --- Part 3: Form Validation ---

const form = document.getElementById('userForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const formMessage = document.getElementById('formMessage');

/**
 * Validates username: must be at least 5 characters
 * @param {string} username 
 * @returns {string} error message or empty string
 */
function validateUsername(username) {
  if (username.trim().length < 5) {
    return 'Username must be at least 5 characters.';
  }
  return '';
}

/**
 * Validates email format using regex
 * @param {string} email 
 * @returns {string} error message or empty string
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address.';
  }
  return '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear previous errors and message
  usernameError.textContent = '';
  emailError.textContent = '';
  formMessage.textContent = '';

  // Validate inputs
  const usernameVal = usernameInput.value;
  const emailVal = emailInput.value;

  const usernameValidation = validateUsername(usernameVal);
  const emailValidation = validateEmail(emailVal);

  let isValid = true;

  if (usernameValidation) {
    usernameError.textContent = usernameValidation;
    isValid = false;
  }
  if (emailValidation) {
    emailError.textContent = emailValidation;
    isValid = false;
  }

  if (isValid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
    form.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fix the errors above.';
  }
});
