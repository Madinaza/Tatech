// document.addEventListener("DOMContentLoaded", function () {
//   // Get the checkbox and the button elements
//   const checkbox = document.getElementById("authorTerms");
//   const button = document.querySelector(".Button__root___266NB");

//   // Add an event listener to the checkbox to handle its state changes
//   checkbox.addEventListener("change", function () {
//     // Update the disabled attribute of the button based on the checkbox state
//     button.disabled = !this.checked;
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById('yourElementId'); // Replace with your actual element ID
  if (element) {
    element.addEventListener('click', function() {
      document.addEventListener('DOMContentLoaded', function() {
        document.addEventListener('DOMContentLoaded', function() {
      const radioInputs = document.querySelectorAll('.RadioButton__radio___8CF7g');
      const nextButton = document.getElementById('nextButton');
      
      radioInputs.forEach(input => {
      input.addEventListener('change', function() {
      if (this.checked) {
        nextButton.classList.add('active');
      } else {
        nextButton.classList.remove('active');
      }
      });
      });
      });
      });
      
    });
  }
});




const radioLabels = document.querySelectorAll('.SpecialtyText__specialityText___32oE6 label');
const continueButton = document.getElementById('continueButton');

radioLabels.forEach((label) => {
  label.addEventListener('click', () => {
    // Check if any radio input is selected
    const isAnyRadioSelected = Array.from(radioLabels).some(
      (label) => document.getElementById(label.getAttribute('for')).checked
    );

    // Enable or disable the "Continue" button based on the radio selection
    if (isAnyRadioSelected) {
      continueButton.removeAttribute('disabled');
    } else {
      continueButton.setAttribute('disabled', 'disabled');
    }
  });
});