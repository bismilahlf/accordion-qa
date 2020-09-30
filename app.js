// 1. Using selectors inside the element:

// Seleccionar todas las tarjetas de preguntas
const questionCards = document.querySelectorAll(".question");

questionCards.forEach( questionCard => {
  // Seleccionar el botón de cada una de las tarjetas
  const btn = questionCard.querySelector(".question-btn");
  
  // Añadir un event listener a cada botón
  btn.addEventListener("click", () => {
    
    // Añadir a la tarjeta clickada la clase
    questionCard.classList.toggle("show-text");
    
    // Seleccionar de nuevo cada una de las tarjetas 
    questionCards.forEach( qc => {
      
      // Si la tarjeta NO es la que ha recibido el click, quitar la clase
      if(qc !== questionCard) {
        qc.classList.remove("show-text");
      }
    });
  });
});



// 2. Traversing the dom:

// const btns = document.querySelectorAll(".question-btn");

// function clickHandler(e) {
//   const questionCard = e.currentTarget.parentElement.parentElement;
//   questionCard.classList.toggle("show-text");
// }

// btns.forEach(btn => {
//   btn.addEventListener("click", clickHandler);
// }); 
