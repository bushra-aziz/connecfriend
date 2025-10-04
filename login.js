const users = [
    { username: "bushra", fullName: "Bushra Aziz", email: "bushraaziz123@gmail.com", profilePic: "profilee.jpg" },
    { username: "hafsa", fullName: "Hafsa Khan", email: "hafsak@gmail.com", profilePic: "photoo.jpg" },
    { username: "azka", fullName: "Azka Ali", email: "azkaali@gmail.com", profilePic: "screen-3.jpg" }
];

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("remember");
    const forgotPasswordLink = document.querySelector(".extra-links a");

    // Load saved username if "Remember Me" was previously checked
    if (localStorage.getItem("rememberedUser")) {
        usernameInput.value = localStorage.getItem("rememberedUser");
        rememberMeCheckbox.checked = true;
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = usernameInput.value.trim();
            let password = passwordInput.value.trim();

            if (!username || !password) {
                alert("Please enter both username and password.");
                return;
            }

            let user = users.find(u => u.username === username);

            if (user) {
                // Save user data in sessionStorage
                sessionStorage.setItem("loggedInUser", JSON.stringify(user));

                // Store username if "Remember Me" is checked
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem("rememberedUser", username);
                } else {
                    localStorage.removeItem("rememberedUser");
                }

                window.location.href = "homePage.html";
            } else {
                alert("Invalid username or password!");
            }
        });
    }

    // Handle "Forgot Password" Click
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault();
            const email = prompt("Enter your registered email to reset your password:");
            if (email) {
                let user = users.find(u => u.email === email);
                if (user) {
                    alert(`A password reset link has been sent to ${email}. Please check your inbox.`);
                } else {
                    alert("No account found with this email.");
                }
            }
        });
    }
});
