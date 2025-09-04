
  (function () {
    emailjs.init("F83g5037XNj6fSj82"); 
  })();

  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_am9dwtk";   

    const templateID = "template_eontdik"; 

    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("✅ Your message was sent successfully!");
      })
      .catch((err) => console.error("❌ Error:", err));
  }

  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
  });
