// scripts.js
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    if (age >= 18) {
        addDataToTable(firstName, lastName, age);
        storeDataLocally(firstName, lastName, age);
    } else {
        alert('Only adults (18 years or older) are allowed.');
    }
});

function addDataToTable(firstName, lastName, age) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).appendChild(document.createTextNode(firstName));
    newRow.insertCell(1).appendChild(document.createTextNode(lastName));
    newRow.insertCell(2).appendChild(document.createTextNode(age));
}

function storeDataLocally(firstName, lastName, age) {
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    existingData.push({ firstName, lastName, age });
    localStorage.setItem('userData', JSON.stringify(existingData));
}

// Load data from local storage when the page loads
window.onload = function() {
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    storedData.forEach(data => {
        addDataToTable(data.firstName, data.lastName, data.age);
    });
}
