const fs = require('fs');
const xlsx = require('xlsx');

const excelFilePath = 'c:/Users/Burne/Desktop/CSI_Cuny_Sping_Courses.xlsx'; // Replace this with your actual file path

// Read the Excel file
const workbook = xlsx.readFile(excelFilePath);

// Assuming the first sheet is the one you want to convert
const sheetName = workbook.SheetNames[0];
const sheetData = workbook.Sheets[sheetName];

// Convert the sheet data to JSON format
const jsonData = xlsx.utils.sheet_to_json(sheetData, {
  header: ['id','_info','_reason','_reqid', '__text']
});

// Write the JSON data to a new file
fs.writeFile('cuny_general_course.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
  if (err) {
    console.error('Error writing the JSON file:', err);
    return;
  }

  console.log('Excel to JSON conversion successful.');
});
