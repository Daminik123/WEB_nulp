const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.querySelector('#username-input');
    const emailInput = document.querySelector('#email-input');
    const passwordInput = document.querySelector('#password-input');

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const formData = {
        username: username,
        email: email,
        password: password
    };

    fetch('http://localhost:8000/userVH', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if(response.ok){
            window.location.href = '/login/login.html'
            alert("Created successfully")
        }
        else{
            alert("User with such email already exists" + response.status + response.statusText)
            throw new Error(response.statusText);
        }
    // handle response from backend
    })
    .catch(error => {
    // handle error from backend
    });
});   

  
  