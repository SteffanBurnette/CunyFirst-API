const fs = require('fs');

// Read the JSON data from the existing file
fs.readFile('colleges.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Sort the JSON data based on college names
  jsonData.sort((a, b) => a.college_Name.localeCompare(b.college_Name));

  // Group college degrees under each college
  const sortedData = [];
  let currentCollege = null;

  for (const entry of jsonData) {
    if (entry.college_Name !== currentCollege) {
      currentCollege = entry.college_Name;
      sortedData.push({ college_Name: currentCollege, college_Degrees: [] });
    }

    if (entry.college_Degree) {
      sortedData[sortedData.length - 1].college_Degrees.push(entry.college_Degree);
    }
  }

  // Write the sorted and grouped JSON data to a new file
  fs.writeFile('sorted_college_majors_data.json', JSON.stringify(sortedData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing the sorted JSON file:', err);
      return;
    }

    console.log('JSON data sorted and grouped successfully.');
  });
});
