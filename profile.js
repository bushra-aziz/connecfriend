document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (user) {
        document.getElementById("fullName").innerText = user.fullName;
        document.getElementById("userEmail").innerText = user.email;
        document.getElementById("profilePic").src = user.profilePic;
    } else {
        alert("No user data found! Redirecting to login...");
        window.location.href = "login.html";
    }
});
function logout() {
    sessionStorage.removeItem("loggedInUser"); 
    window.location.href = "login.html";
}