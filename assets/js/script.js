function sendMail(contactForm) {

  var formData = {
    "name": contactForm.name.value,
    "dining": contactForm.dining.value,
    "diet": contactForm.diet.value,
  };

  if (contactForm.guest_1_name.value) {
    formData["guest1"] = `${contactForm.guest_1_name.value} is ${contactForm.guest_1_dining.value}. Their dietary requirements are - ${contactForm.guest_1_diet.value}.`;
  };

  if (contactForm.guest_2_name.value) {
    formData["guest2"] = `${contactForm.guest_2_name.value} is ${contactForm.guest_2_dining.value}. Their dietary requirements are - ${contactForm.guest_2_diet.value}.`;
  };

  emailjs.send("service_2p76xzg", "attendace_form", formData)
  .then(
    function(response) {
      window.location.href = "thanks.html"
      return response;
    },
    function(error) {
      alert("I'm sorry, something went wrong! Please try again");
      return error;
    });
  return false;
}
