function sendMail(contactForm) {
    emailjs.send("service_u4rrwc7","Braintraingame", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.usertext.value

    })

    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.open("thank-you.html");
        },
        function(error) {
            console.log("FAILED", error);
            window.open("404.html");
        } 
    );
    return false;
}