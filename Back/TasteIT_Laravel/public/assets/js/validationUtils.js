export function setupPasswordValidation(){

    var myInput = document.getElementById("password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
  
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
  
    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
  
    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
  
      // Validate numbers
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
      
      // Validate length
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }

}


export function validateFirstName(data, setErrorMessages){
    if (!(allLetter(data.firstname))){
        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            firstname: 'Field firstname can only contain letters',
        }));

        return "yes";

    }else{

        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            firstname: '',
        }));

        return "";
    }
}

export function validateSurname(data, setErrorMessages){
    if (data.surname === null || data.surname === "" || allLetter(data.surname)){
        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            surname: '',
        }));

        return "";
    }else{
        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            surname: 'Field surname can only contain letters',
        }));
        return "yes"
    }
}

export function validatePassword(data, setErrorMessages){
    if (data.password !== data.password_confirmation){
        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            password: 'The passwords are not the same',
        }));

        return "yes";

    }else{

        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            password: '',
        }));

        return "";
    }
}

export function validateRecipeDifficulty(data, setErrorMessages){
  if (!['beginner', 'medium', 'expert'].includes(data.difficulty)) {
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      difficulty: 'Please select a valid difficulty',
  }));
    return "yes";

  }else{

      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          difficulty: '',
      }));

      return "";
  }
}

export function validateStarRating(data, setErrorMessages){

  if ( !([1, 2, 3, 4, 5].includes(parseInt(data.rating)))) {
    setErrorMessages((prevErrors) => ({
        ...prevErrors,
        rating: 'Select at least 1 star, please',
    }));

    return "yes";
  }else{

      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          rating: '',
      }));

      return "";
  }
}

export function validateImage(data, setErrorMessages){

  if (!data.image ) {
    setErrorMessages((prevErrors) => ({
        ...prevErrors,
        image: 'Upload an image, please',
    }));

    return "yes";
  }else{

      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          image: '',
      }));

      return "";
  }
}

export function validateRecipeTitle(data, setErrorMessages){
  if (!(allLetterAndSpaces(data.title))){
    setErrorMessages((prevErrors) => ({
        ...prevErrors,
        title: 'Field title can only contain letters',
    }));

    return "yes";

  }else if (data.title.length > 60) {
    setErrorMessages((prevErrors) => ({
        ...prevErrors,
        title: 'Field title cannot have more than 60 caracters',
    }));

    return "yes";

  }else{

      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          title: '',
      }));

      return "";
  }
}

export function validateRecipeDescription(data, setErrorMessages){
  if (!(allLetterAndSpaces(data.description))){
      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          description: 'Field description can only contain letters',
      }));

      return "yes";

  }else if (data.title.length > 1024) {
    setErrorMessages((prevErrors) => ({
        ...prevErrors,
        description: 'Field description cannot have more than 1024 caracters',
    }));

    return "yes";

  }else{

      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          description: '',
      }));

      return "";
  }
}

export function validateRecipeIngredients(data, setErrorMessages){
  if (Object.keys(data.amount).length === 0) {
      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          amount: 'Select at least 1 ingredient, please',
      }));

      return "yes";

  }else{

      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          amount: '',
      }));

      return "";
  }
}

export function validateIngredientName(data, setErrorMessages){
  if (!(allLetterAndSpaces(data.name))){
      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          name: 'Field name can only contain letters',
      }));

      return "yes";

  }else{

      setErrorMessages((prevErrors) => ({
          ...prevErrors,
          name: '',
      }));

      return "";
  }
}


function allLetter(inputtxt){

    var letters = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+$/;

    if (inputtxt.match(letters)){
        return true;
    }else{
        return false;
    }
}

function allLetterAndSpaces(inputtxt){

  var letters = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ, \n]+$/;

  if (inputtxt.match(letters)){
      return true;
  }else{
      return false;
  }
}

export function setupStarRating(setData) {
  let stars = document.getElementsByClassName("star");

  for (let i = 0; i < stars.length; i++) {
      stars[i].onclick = function(index) {
          return function() {
              gfg(index + 1);
              setData('rating', index + 1);
          }
      }(i);
  }
}

function gfg(n) {
  let stars = document.getElementsByClassName("star");
  remove();
  for (let i = 0; i < n; i++) {
      stars[i].classList.add("yellow");
  }

}

// To remove the pre-applied styling
function remove() {
  let stars = document.getElementsByClassName("star");

  for (let i = 0; i < 5; i++) {
      stars[i].classList.remove("yellow");
  }
}

export function getDifficultyColorAndText(difficulty) {
  let difficultyColor, difficultyText;

  if (difficulty === 'beginner') {
    difficultyColor = 'green';
    difficultyText = 'Beginner';
  } else if (difficulty === 'medium') {
    difficultyColor = 'yellow';
    difficultyText = 'Medium';
  } else if (difficulty === 'expert') {
    difficultyColor = 'red';
    difficultyText = 'Expert';
  }

  return [ difficultyColor, difficultyText ];
}