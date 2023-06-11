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

//validation ----------------------------------------

const validateForm = () => {

  const username = document.getElementById('username');
  const username2 = document.getElementById('username2');
  const email = document.getElementById('email');

  const usernameValue = username.value.trim();
  const usernameValue2 = username2.value.trim();
  const emailValue = email.value.trim();

  let noError = true;

  //Validation du Username
  if(usernameValue === '') {
      setError(username, 'Le nom ne peut pas être vide');
      noError = false;
  } else {
      setSuccess(username);
  }

  //Validation du Username2
  if(usernameValue2 === '') {
      setError(username2, 'Le nom ne peut pas être vide');
      noError = false;
  } else {
      setSuccess(username2);
  }

  //Validation du email
  if(emailValue === ''){
      setError(email,'Email ne peut être vide');
      noError = false;
  }
  else if(!validateEmail(emailValue)){
      setError(email,'Entrez une adresse courriel valide');
      noError = false;
  }
  else{
      setSuccess(email);
  }

  console.log(noError);
  return noError;
}

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(String(email).toLowerCase());
}

const setError = (element, message) => { 
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMessage');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMessage');

  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
}

