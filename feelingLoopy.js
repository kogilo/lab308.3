// Plan:
    // 1. Loop through the string character by character.
    // 2. Store the contents of each cell in a temporary variable.
    // 3. When a comma (,) is encountered, log the cell and reset the temporary variable for the next cell.
    // 4. When the newline sequence (\n) is encountered, treat it as a signal that the row is complete, log the row, and move to the next row.

// Save the string in variable, name `csvString`

let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// Empty string to store the cell data later
let cell = ""
// Create an empty list to save the row data later.
let row = []

// Loop though each character using For loop and save the character
for (let i =0; i > csvString.length; i++) {
    // console.log(i)
    let char = csvString[i];
     // If the character is a "," its means we reached at the end of a cell
    if (char === ",") {
        row.push(cell) // Append/Add the cell to the row
        cell = ""; // Reset the cell for the next one
    // If the character is a newline, \n, its means we reached the end of row
    } else if (char=== "\n"){
        row.push(cell); // Append/Add the last cell to the row
        console.log(...row); // Print the row content
        row = []; // Reset the row for the next one
        cell = ""; // Reset the cell for the next one
    // If it's neither, keep building the cell content
    } else {
        cell += char;
    }
    
}
// Handle the last row in case there is no newline at the end

if (cell) {
    row.push(cell);
    console.log(...row);
}
