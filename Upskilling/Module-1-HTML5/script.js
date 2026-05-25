function validatePhone() {

    let phone =
        document.getElementById("phone").value;

    if (phone.length !== 10) {

        alert("Phone number must be 10 digits");
    }
}


function showConfirmation() {

    document.getElementById(
        "confirmationMessage"
    ).innerHTML =

    "Registration submitted successfully!";
}


function enlargeImage(img) {

    img.style.width = "300px";

    img.style.height = "300px";
}


function videoReady() {

    document.getElementById("videoMessage")
        .innerHTML =

        "Video ready to play";
}


function showFee() {

    let event =
        document.getElementById("eventSelect");

    let fee =
        event.value;

    document.getElementById("eventFee")
        .innerHTML =

        "Event Fee: $" + fee;
}


function savePreference() {

    let selectedEvent =
        document.getElementById("eventSelect").value;

    localStorage.setItem(
        "preferredEvent",
        selectedEvent
    );

    alert("Preference Saved!");
}


function clearPreferences() {

    localStorage.clear();

    sessionStorage.clear();

    alert("Preferences Cleared!");
}


function countCharacters() {

    let feedback =
        document.getElementById("feedbackText").value;

    document.getElementById("charCount")
        .innerHTML =

        "Characters: " + feedback.length;
}


function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError,
            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );

    } else {

        alert("Geolocation not supported");
    }
}


function showPosition(position) {

    document.getElementById("locationResult")
        .innerHTML =

        "Latitude: " +
        position.coords.latitude +

        "<br>Longitude: " +
        position.coords.longitude;
}


function showError(error) {

    alert("Location access denied or timeout");
}


window.onbeforeunload = function () {

    return "Are you sure you want to leave?";
};
