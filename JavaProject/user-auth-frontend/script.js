// Base URL for your Spring Boot API (assuming it runs on port 8080)
const API_BASE_URL = 'http://localhost:8080/users';

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

const registerSection = document.getElementById('register-section');
const loginSection = document.getElementById('login-section');

// --- Form Switching Logic ---
window.showLogin = function() {
    registerSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    messageDiv.textContent = ''; // Clear message when switching
    messageDiv.className = 'message';
}

window.showRegister = function() {
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
    messageDiv.textContent = ''; // Clear message when switching
    messageDiv.className = 'message';
}

// --- API Request Functions ---
async function handleRequest(endpoint, username, password) {
    const url = `${API_BASE_URL}/${endpoint}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const text = await response.text();

        if (response.ok) {
            // Success response (e.g., 200 OK)
            messageDiv.className = 'message success';
            messageDiv.textContent = text || `${endpoint} successful!`;
        } else {
            // Error response (e.g., 401 Unauthorized)
            messageDiv.className = 'message error';
            messageDiv.textContent = text || `Error during ${endpoint}.`;
        }

    } catch (error) {
        // Network or CORS error
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Could not connect to the backend API. Check if the Spring Boot server is running and CORS is configured.';
        console.error('Fetch error:', error);
    }
}

// --- Event Listeners ---
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    handleRequest('register', username, password);
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('log-username').value;
    const password = document.getElementById('log-password').value;
    handleRequest('login', username, password);
});