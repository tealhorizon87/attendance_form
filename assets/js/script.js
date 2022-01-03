function sendMail(contactForm) {
  emailjs.send("service_2p76xzg", "attendace_form", {
    "from_name": contactForm.name.value,
    "dining": contactForm.dining.value,
    "diet": contactForm.diet.value,
    "guest1": contactForm.guest_1_name.value,
    "guest1_dining": contactForm.guest_1_dining.value,
    "guest1_diet": contactForm.guest_1_diet.value,
    "guest2": contactForm.guest_2_name.value,
    "guest2_dining": contactForm.guest_2_dining.value,
    "guest2_diet": contactForm.guest_2_diet.value
  });
  .then(
    function(response) {
      alert("Your feedback has been sent");
      clearForm();
      return response;
    },
    function(error) {
      alert("I'm sorry, something went wrong! Please try again");
      return error;
    });
  return false;
}

function clearForm() {
  document.getElementsByTagName("input").value = '';
  document.getElementsByTagName("select").value = '';
}
