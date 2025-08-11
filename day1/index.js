/*
Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

**Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
**Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.
*/

// Get references to DOM elements
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []

// Function to check item is not duplicate
function checkDuplicate() {
    
    /* ⚠️ You need to add code to this function! ⚠️*/ 
    
    // Store user input as itemText
    const itemText = itemInput.value
        console.log('itemText:', itemText);
    
    // Store user input as elements in an array, delineated by whitespace
    const itemTextArr = itemText.split(' ');
        console.log('itemTextArr:', itemTextArr);
    
    // In a new array, store only the words, excluding whitespace 
    let newItemTextArr = [];
    for (let i = 0; i < itemTextArr.length; i++) {
        if (itemTextArr[i] !== '') {
            newItemTextArr.push(itemTextArr[i]);
        }
    }
        console.log('newItemTextArr:', newItemTextArr);
    
    // From the new array, reconstruct a string representing the original user input but without any extraneous whitespace
    let newItemText = '';
    for (let i = 0; i < newItemTextArr.length; i++) {
        newItemText = newItemText + newItemTextArr[i] + ' ';
    }
    newItemText = newItemText.trim(' ');
        // console.log('CHARACTER COUNT', newItemText.length);
        console.log('newItemText:', newItemText);
        
    // Make a lowercased version of listArr 
    let listArrLowerCase = [];
    if (listArr.length > 0) {
        for (let i = 0; i < listArr.length; i++) {
            let listElement = listArr[i];
            listElement = listElement.toLowerCase();
            listArrLowerCase.push(listElement);
        }
    }
    
    // Push the new string into listArr if any of its capitalization variations doesn't already exist there
    const newItemTextLowerCase = newItemText.toLowerCase();
    if (!listArrLowerCase.includes(newItemTextLowerCase)) {
        listArr.push(newItemText);
    }
        // console.log('listArr', listArr);
        // console.log('listArrLowerCase', listArrLowerCase);
    renderList()
}

// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift) => {
        const listItem = document.createElement('li')
        listItem.textContent = gift
        shoppingList.appendChild(listItem)
    })
    itemInput.value = ''; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
