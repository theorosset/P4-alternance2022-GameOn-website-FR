const form = document.querySelector("form");

//function main for validation
function formValidation() {
  //validation of email
  form.email.addEventListener("input", (e) => {
    emailValid(form.email);
  });

  //validation of firstName
  form.first.addEventListener("input", (e) => {
    firstNameValid();
  });

  //validation of lastName
  form.last.addEventListener("input", (e) => {
    lastNameValid();
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      firstNameValid() === true &&
      emailValid(form.email) === true &&
      lastNameValid() === true &&
      birthdateValid() === true &&
      checkBoxAreChecked() === true &&
      validQuantity() === true &&
      checkBoxCondtion() === true
    ) {
      alert("Votre réservation est confirmer");
      document.location.href = "./index.html";
    } else {
      return playAllFunctionVerif();
    }
  });
}

//-------------function for validation input form----------

/**
 * enlever les return inutile
 *
 * @param {HtmlInputElement} inputEmail
 * @returns errors if email are not valid
 */
function emailValid(inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,15}$"
  );
  let emailTest = emailRegExp.test(inputEmail.value);

  /**
   * if false error messsage for email are add
   */
  if (emailTest === false) {
    return (document.querySelector("#errorEmail").innerText =
      "Veuillez entrer un email valide");
  }

  //else nothing are add
  else {
    return (document.querySelector("#errorEmail").innerText = ""), true;
  }
}

//verify if one checkBox are checked
function checkBoxAreChecked() {
  const allBtnRadios = document.querySelectorAll(".btn-radio");
  let checkBoxChecked = false;

  allBtnRadios.forEach((checkBox) => {
    if (checkBox.checked === true) {
      checkBoxChecked = true;
    }
  });
  return checkBoxChecked;
}

function checkBoxCondtion() {
  if (form.checkbox1.checked === false) {
    return (document.querySelector("#errorCondition").innerText =
      "Veuillez accepter les conditions d'utilisation");
  } else {
    return (document.querySelector("#errorCondition").innerText = ""), true;
  }
}

//checkBox show error if not check
function checkBoxValid() {
  if (checkBoxAreChecked() === false) {
    return (document.querySelector("#errorCheckBox").innerText =
      "Veuillez séletionner une option");
  } else {
    return (document.querySelector("#errorCheckBox").innerText = ""), true;
  }
}

function validate(trueOrFalse) {
  return trueOrFalse;
}

//show error if firstName has < 2
function firstNameValid() {
  if (form.first.value.length < 2) {
    document.querySelector("#errorFirstName").innerText =
      "Votre Prénom doit faire minimum 2 caratère";
  } else {
    return (document.querySelector("#errorFirstName").innerText = ""), true;
  }
}

//show error if lastName has < 2
function lastNameValid() {
  if (form.last.value.length < 2) {
    return (document.querySelector("#errorLastName").innerText =
      "Votre Nom doit faire minimum 2 caratère");
  } else {
    return (document.querySelector("#errorLastName").innerText = ""), true;
  }
}
// show error if birthdate are empty
function birthdateValid() {
  if (!form.birthdate.value.length) {
    return (document.querySelector("#errorBirthday").innerText =
      "Veuilliez entrez votre date de naissance");
  } else {
    return (document.querySelector("#errorBirthday").innerText = ""), true;
  }
}

function validQuantity() {
  if (
    (parseInt(form.quantity.value) < 0 && parseInt(form.quantity.value) > 99) ||
    !form.quantity.value
  ) {
    return (document.querySelector("#errorQuantity").innerText =
      "Veuilliez entrer une valeur valide (entre 0 et 100)");
  } else {
    return (document.querySelector("#errorQuantity").innerText = ""), true;
  }
}
function playAllFunctionVerif() {
  checkBoxValid();
  birthdateValid();
  validQuantity();
  emailValid(form.email);
  lastNameValid();
  birthdateValid();
  checkBoxAreChecked();
  checkBoxCondtion();
}

formValidation();
