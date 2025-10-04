let ignoreList = ["Min-jun"]; 

const randomPeople = [
    { name: "Min-jun", image: "profile4.webp" },
    { name: "Yuna", image: "girl.jpg" },
    
];

function generatePeopleList() {
    let peopleContainer = document.getElementById("random-people");

    randomPeople.forEach(person => {
        let personDiv = document.createElement("div");
        personDiv.classList.add("person");

        personDiv.innerHTML = `
            <img src="${person.image}" alt="Profile Picture">
            <span>${person.name}</span>
            <button onclick="sendFriendRequest('${person.name}')">Add Friend</button>
        `;

        peopleContainer.appendChild(personDiv);
    });
}

function sendFriendRequest(personName) {
    if (ignoreList.includes(personName)) {
        alert(`Friend request cannot be sent.This person has marked request senders to ignore list`);
    } else {
        alert(`Friend request sent to ${personName}`);
    }
}

document.addEventListener("DOMContentLoaded", generatePeopleList);
        // Rating System
        function rateFriend(friendName, rating) {
            let ratingText = rating === 1 ? "Stupid 🤡" : rating === 2 ? "Cool 😎" : "Trustworthy 🔒";
            alert(`You rated ${friendName} as ${ratingText}`);
        }

        // Like & Dislike Functionality
        function likePost(button) {
            let countSpan = button.querySelector(".like-count");
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
        }

        function dislikePost(button) {
            let countSpan = button.querySelector(".dislike-count");
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
        }

        // Post Sharing Functionality
        function sharePost(author, content) {
            let shareOption = confirm("Do you want to share with all friends?");
            let shareMessage = shareOption
                ? `Shared '${content}' from ${author} with all friends!`
                : `Shared '${content}' with selected friends.`;
            alert(shareMessage);
        }

        // Private Messaging
        function sendMessage() {
    console.log("sendMessage() function is being called."); // Debugging log

    let friend = document.getElementById("friend-list").value;
    let messageInput = document.getElementById("message-input");
    let messageBox = document.getElementById("message-log");

    if (!messageBox) {
        console.error("Error: #message-log element is missing!");
        return;
    }

    let message = messageInput.value.trim();
    console.log("Message to send:", message); // Debugging log

    if (message !== "") {
        let newMessage = document.createElement("p");
        newMessage.innerHTML = `<strong>You to ${friend}:</strong> ${message}`;
        
        messageBox.appendChild(newMessage);
        messageInput.value = ""; // Clear input

        // Auto-scroll to the latest message
        messageBox.scrollTop = messageBox.scrollHeight;
        console.log("Message added successfully."); // Debugging log
    } else {
        console.warn("Message input is empty."); // Debugging log
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(sessionStorage.getItem("loggedInUser")); 

    if (user) {
        document.getElementById("userFullName").innerText = user.fullName;
    } else {
        alert("No user data found! Redirecting to login...");
        window.location.href = "login.html";
    }

    let profileBtn = document.getElementById("view-profile-btn");
    if (profileBtn) {
        profileBtn.addEventListener("click", function () {
            window.location.href = "profile.html"; 
        });
    }

    document.addEventListener("click", function (event) {
    if (event.target.id === "view-profile-btn") {
        console.log("Button clicked! Redirecting...");
        window.location.href = "profile.html";
    }
});

});