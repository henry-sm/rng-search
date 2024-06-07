const tableBody = document.querySelector('tbody');

fetch('./../action/engines.json')
    .then(response => response.json())
    .then( data => {
        const arrLen = data[Object.keys(data)[0]];
        arrLen.forEach(value =>{
            const tableRow = document.createElement('tr');
            const valueCell = document.createElement('td');
            valueCell.textContent = value;
            tableRow.appendChild(valueCell);
            tableBody.appendChild(tableRow);
        });

    })

