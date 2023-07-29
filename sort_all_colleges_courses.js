const fs = require('fs');

// Function to sort the data by colleges and their courses
function sortData(jsonData) {
  const sortedData = {};
  jsonData.forEach((entry) => {
    const college = entry.column1;
    const course = entry.column2;
    const courseName = entry.column4;
    const courseType = entry.column6;

    if (!sortedData[college]) {
      sortedData[college] = [];
    }

    sortedData[college].push({
      course,
      courseName,
      courseType,
    });
  });

  return sortedData;
}

// Read the JSON file
fs.readFile('Table001 (Page 1-74).json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const jsonData = JSON.parse(data);

  // Sort the data
  const sortedData = sortData(jsonData);

  // Write the sorted data to a new JSON file
  fs.writeFile('output.json', JSON.stringify(sortedData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('Data sorted and saved to output.json.');
  });
});
