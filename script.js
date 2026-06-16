//your code here
// Grab DOM elements
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addBtn = document.getElementById("add-btn");
const table = document.getElementById("shopping-cart");
const totalRow = document.getElementById("total-row");
const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');

addBtn.addEventListener("click", () => {
    // 1. Get values
    const itemName = nameInput.value.trim();
    const itemPrice = parseFloat(priceInput.value);

    // 2. Validate input (Ignore empty names or invalid/negative prices)
    if (itemName === "" || isNaN(itemPrice) || itemPrice < 0) {
        return; 
    }

    // 3. Create a new table row for the item
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.setAttribute("data-ns-test", "item-name");
    nameCell.innerText = itemName;

    const priceCell = document.createElement("td");
    priceCell.setAttribute("data-ns-test", "item-price");
    priceCell.innerText = itemPrice;

    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);

    // 4. Insert the new row before the total row
    table.insertBefore(newRow, totalRow);

    // 5. Update the grand total
    let currentTotal = parseFloat(grandTotalElement.innerText) || 0;
    currentTotal += itemPrice;
    grandTotalElement.innerText = currentTotal;

    // 6. Clear the input fields
    nameInput.value = "";
    priceInput.value = "";
});