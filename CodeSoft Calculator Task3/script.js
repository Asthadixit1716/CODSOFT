const resultContainer = document.querySelector('.result-container');
let currentInput = "";

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
          console.log("Clicked:", value); //
        if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = "Error";
            }
        } else if (value === 'Clear') {
            currentInput = "";
        } else if (value === 'Cut') {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput += value;
        }


        resultContainer.textContent = currentInput || "0";
    });
});

