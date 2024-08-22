// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Contact Form Validation
function validateContactForm() {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const subject = document.querySelector('input[name="subject"]');
    const message = document.querySelector('textarea[name="message"]');
    
    if (name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
        alert("All fields are required!");
        return false;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address!");
        return false;
    }
    
    return true;
}

document.querySelector('form').addEventListener('submit', function (e) {
    if (!validateContactForm()) {
        e.preventDefault();
    }
});
