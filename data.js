//Part 1 and 2
function csvToArray(csvString) {
    const rows = csvString.split('\n');
    const header = rows[0].split(',');
    const numColumns = header.length;

    const csvArray = [header];

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');

        if (row.length === numColumns) {
            csvArray.push(row);
        } else {
            throw new Error(`Row ${i + 1} does not match the number of columns`);
        }
    }

    return csvArray;
}

const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

const result = csvToArray(csvData);
console.log(result);

// Part 3: Transform rows into objects
const headers = result[0].map(header => header.toLowerCase());
const dataObjects = result.slice(1).map(row => {
    let obj = {};
    row.forEach((value, index) => {
        obj[headers[index]] = value;
    });
    return obj;
});

console.log(dataObjects);

// Part 4: Sorting and Manipulating Data
// Remove the last element
dataObjects.pop();

// Insert object at index 1
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add object to the end
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(dataObjects);

// Calculate the average age
let totalAge = 0;
dataObjects.forEach(obj => {
    totalAge += parseInt(obj.age);
});
const averageAge = totalAge / dataObjects.length;

console.log(`Average Age: ${averageAge}`);


// Part 5: Transform the final set of data back into CSV format
function arrayToCSV(dataArray) {
    const csvRows = [];
    const headers = Object.keys(dataArray[0]);
    csvRows.push(headers.join(','));

    dataArray.forEach(obj => {
        const values = headers.map(header => obj[header]);
        csvRows.push(values.join(','));
    });

    return csvRows.join('\n');
}

const finalCSV = arrayToCSV(dataObjects);
console.log(finalCSV);
