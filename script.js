document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const table = document.querySelector('table');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting

        // Get form data
        const productName = document.querySelector('#1').value;
        const price = document.querySelector('#2').value;

        // Create a new row and cells
        const newRow = document.createElement('tr');
        newRow.setAttribute("align", "center");

        const nameCell = document.createElement('td');
        nameCell.style.backgroundColor = "rgb(117, 117, 216)";
        nameCell.textContent = productName;

        const priceCell = document.createElement('td');
        priceCell.textContent = `${price} jd`;

        const actionCell = document.createElement('td');
        actionCell.align = "center";

        const editButton = document.createElement('button');
        editButton.textContent = "edit";

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "delete";

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(actionCell);

        table.appendChild(newRow);

        // Clear form
        form.reset();
    });
});
