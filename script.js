const form = document.getElementById('job');
const lastName = document.getElementById('lname');
const firstName = document.getElementById('fname');
const email = document.getElementById('email');
const message = document.getElementById('message');


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//validation

const validateForm = () => {
  let noError = true;
  const lastnameValue = lastName.value.trim();
  const firstnameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  console.log('validateForm!')

  if (lastnameValue === '') {
    setError(lastName, 'Lastname is required');
    noError = false;
  } else {
    setSuccess(lastName);
  }
  
  if (firstnameValue === '') {
    setError(firstName, 'Firstname is required');
    noError = false;
  } else {
    setSuccess(firstName);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
    noError = false;
  } else if (!validateEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
    noError = false
  } else {
    setSuccess(email);
  }

  return noError;
}

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querrySelector('errorMessage');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querrySelector('errorMessage');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

