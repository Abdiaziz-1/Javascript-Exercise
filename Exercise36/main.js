const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistoryButton = document.querySelector('#clearHistoryButton');

// Event for color changes
colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    colorPreview.style.backgroundColor = selectedColor;
    addColorToHistory(selectedColor);
});

// adding the selected color to the history
function addColorToHistory(color) {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    colorHistory.appendChild(li);
}

// clearing history
clearHistoryButton.addEventListener('click', function() {
    colorHistory.innerHTML = ''; 
});
