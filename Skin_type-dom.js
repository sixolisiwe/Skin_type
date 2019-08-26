
var TypeElement = document.querySelector(".faceType");
var faceMsgElement = document.querySelector(".error");
var submitBtnElement = document.querySelector(".faceBtn");
var enterTypeElement = document.querySelector("#faceAnswer");
var i = document.querySelector(".ChangeMSg");
var linkElement = document.querySelector(".LinkBtn");

let forFace = factorySkinType();

function addError(ErrorMsg) {

    faceMsgElement.innerHTML = ErrorMsg;

}

function TypeofSkin(){

   i.innerHTML = forFace.Msg(enterTypeElement.value);
   
  
   

}
function linksPage(){
   if (enterTypeElement.value==="Clear"){

    window.open('https://www.paulaschoice.com', '_blank');
   }
   
   if (enterTypeElement.value==="Pink"){

    window.open('https://www.cosmopolitan.com', '_blank');
   }

   if (enterTypeElement.value==="White"){

    window.open('https://www.paulaschoice.com', '_blank');
   }

   if (enterTypeElement.value==="Blue"){

    window.open('https://www.paulaschoice.com', '_blank');
   }
   
   if (enterTypeElement.value==="Green"){

    window.open('https://www.paulaschoice.com', '_blank');
   }
  
}



submitBtnElement.addEventListener('click', TypeofSkin)
linkElement.addEventListener('click', linksPage)