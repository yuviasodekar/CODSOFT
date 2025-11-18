document.addEventListener('DOMContentLoaded', () => {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelector('.buttons');
    let currentInput = '';
    let isCalculated = false;

    const updateDisplay = (value) => {
        resultInput.value = value;
    };

    buttons.addEventListener('click', (event) => {
        const target = event.target;
        
        if (!target.classList.contains('btn')) {
            return;
        }

        const value = target.getAttribute('data-value');
        const action = target.getAttribute('data-action');

        if (action === 'clear') {
            currentInput = '';
            isCalculated = false;
            updateDisplay('0');
        } else if (action === 'delete') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput || '0');
        } else if (action === 'calculate') {
            if (currentInput) {
                try {
                    
                    let result = eval(currentInput); 
                    result = parseFloat(result.toFixed(5)); 
                    updateDisplay(result);
                    currentInput = String(result);
                    isCalculated = true; 
                } catch (e) {
                    updateDisplay('Error');
                    currentInput = '';
                }
            }
        } 
        else if (value) {
            if (isCalculated && target.classList.contains('number')) {
                currentInput = value;
                isCalculated = false;
            } else {
                currentInput += value;
                isCalculated = false;
            }
            updateDisplay(currentInput);
        }
    });
});