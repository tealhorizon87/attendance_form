const otherDiet = document.getElementById("otherDiet");
const otherDiet1 = document.getElementById("otherDiet1");
const otherDiet2 = document.getElementById("otherDiet2");
const otherDiet3 = document.getElementById("otherDiet3");

function attending() {
  if (!document.getElementById("notAttending").classList.contains("d-none")) {
    document.getElementById("notAttending").classList.add("d-none");
  };

  document.getElementById("attending").classList.remove("d-none");
}

function notAttending() {
  if (!document.getElementById("attending").classList.contains("d-none")) {
    document.getElementById("attending").classList.add("d-none");
  };

  document.getElementById("notAttending").classList.remove("d-none");
}

function dietSelector(that) {
  if (that.name == "diet") {
    if (that.value == "other") {
      otherDiet.style.display = "block";
    }
  } else if (that.name == "guest_1_diet") {
    if (that.value == "other") {
      otherDiet1.style.display = "block";
    }
  } else if (that.name == "guest_2_diet") {
    if (that.value == "other") {
      otherDiet2.style.display = "block";
    }
  } else if (that.name == "guest_3_diet") {
    if (that.value == "other") {
      otherDiet3.style.display = "block";
    }
  }
}

function attendingForm(contactForm) {
  var formData = {
    "name": contactForm.name.value,
    "email": contactForm.email.value,
  };

  if (contactForm.diet.value == "other") {
    formData["member"] = `${contactForm.name.value} will be attending. They will be ${contactForm.dining.value}.
      Their dietary requirements are - Other: ${otherDiet.value}.`;
  } else if (contactForm.dining.value == "dining") {
    formData["member"] = `${contactForm.name.value} will be attending. They will be ${contactForm.dining.value}.
      Their dietary requirements are - ${contactForm.diet.value}.`;
  } else {
    formData["member"] = `${contactForm.name.value} will be attending. They will be ${contactForm.dining.value}.`;
  }

  if (contactForm.guest_1_name.value) {
    if (contactForm.guest_1_diet.value == "other") {
      formData["guest1"] = `${contactForm.guest_1_name.value}: ${contactForm.guest_1_dining.value}.
        Their dietary requirements are - Other: ${otherDiet1.value}.`;
    } else if (contactForm.guest_1_dining.value == "dining") {
      formData["guest1"] = `${contactForm.guest_1_name.value}: ${contactForm.guest_1_dining.value}.
        Their dietary requirements are - ${contactForm.guest_1_diet.value}.`;
    } else {
      formData["guest1"] = `${contactForm.guest_1_name.value}: ${contactForm.guest_1_dining.value}.`;
    }
  };

  if (contactForm.guest_2_name.value) {
    if (contactForm.guest_2_diet.value == "other") {
      formData["guest2"] = `${contactForm.guest_2_name.value}: ${contactForm.guest_2_dining.value}.
        Their dietary requirements are - Other: ${otherDiet2.value}.`;
      } else if (contactForm.guest_2_dining.value == "dining") {
        formData["guest2"] = `${contactForm.guest_2_name.value}: ${contactForm.guest_2_dining.value}.
          Their dietary requirements are - ${contactForm.guest_2_diet.value}.`;
      } else {
        formData["guest2"] = `${contactForm.guest_2_name.value}: ${contactForm.guest_2_dining.value}.`;
      }
  };

  if (contactForm.guest_3_name.value) {
    if (contactForm.guest_3_diet.value == "other") {
      formData["guest3"] = `${contactForm.guest_3_name.value}: ${contactForm.guest_3_dining.value}.
        Their dietary requirements are - Other: ${otherDiet3.value}.`;
      } else if (contactForm.guest_3_dining.value == "dining") {
        formData["guest3"] = `${contactForm.guest_3_name.value}: ${contactForm.guest_3_dining.value}.
          Their dietary requirements are - ${contactForm.guest_3_diet.value}.`;
      } else {
        formData["guest3"] = `${contactForm.guest_3_name.value}: ${contactForm.guest_3_dining.value}.`;
      }
  };

  emailjs.send("service_2p76xzg", "template_wrmtcix", formData)
  .then(
    function(response) {
      window.location.href = "thanks.html"
      return response;
    },
    function(error) {
      alert("I'm sorry, something went wrong! Please try again");
      return error;
    });

  emailjs.send("service_2p76xzg", "template_qadn8oc", formData)
  .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

  return false;
}

function notAttendingForm(contactForm) {
  var formData = {
    "name": contactForm.name.value,
    "email": contactForm.email.value,
    "comments": contactForm.comments.value,
    "member": `${contactForm.name.value} will not be attending.`,
    "guest1": 'N/A',
  };

  emailjs.send("service_2p76xzg", "template_efei8f6", formData)
  .then(
    function(response) {
      window.location.href = "thanks.html"
      return response;
    },
    function(error) {
      alert("I'm sorry, something went wrong! Please try again");
      return error;
    });

  emailjs.send("service_2p76xzg", "template_qadn8oc", formData)
  .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

  return false;
}
