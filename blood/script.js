function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        blood: document.getElementById("blood").value,
    };
  
    const serviceID = "service_efo24ro";
    const templateID = "template_yzfed97";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("city").value = "";
        document.getElementById("blood").value = "";
          console.log(res);
        alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  


  



      

