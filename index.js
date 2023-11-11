const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalText = document.getElementById("modal-text");
const consentForm = document.getElementById("consent-form");
const modalChoiceBtns = document.getElementById("modal-choice-btns");
const declineBtn = document.getElementById("decline-btn");

setTimeout(function() {
    modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

declineBtn.addEventListener("mouseover", function() {
    modalChoiceBtns.classList.toggle("modal-btns-reverse");
});

consentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const consentFormData = new FormData(consentForm);
    const name = consentFormData.get("name");
    
    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" alt="Loading animation of moving dots" class="loading">
            <p id="upload-text">Uploading your data to the dark web...</p>
        </div>
    `; 
    
    setTimeout(function() {
        document.getElementById("upload-text").innerText = `
            Making the sale...
        `;
    }, 1500);
     
    setTimeout(function() {
        document.getElementById("modal-inner").innerHTML = `
            <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif" alt="A man in pirate attire, wearing a hat and laughing">
            </div>
        `;
        modalCloseBtn.disabled = false;
    }, 3000);
  
});