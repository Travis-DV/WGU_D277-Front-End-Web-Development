document.addEventListener('DOMContentLoaded', function() {
    //alert("Loaded")

    document.getElementById('submit').addEventListener('click', CheckEmails);
});

function CheckEmails() {
    let bEmail = document.getElementById('Email');
    let cEmail = document.getElementById('CEmail');
    if (bEmail.value !== cEmail.value) {
        alert('Emails dont match');
    }
}