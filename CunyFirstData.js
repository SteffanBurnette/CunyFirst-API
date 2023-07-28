// Import modules
const cheerio = require("cheerio");
const axios = require("axios"); 
const fs = require("fs");

// URL to scrape
const url = "https://www.cuny.edu/admissions/undergraduate/explore/programs/";

// Array to store data  
const collegeData = [];

// Scrape function
async function scrapeData() {

  try {

    // Fetch HTML
    const response = await axios.get(url);

    // Load HTML into Cheerio
    const $ = cheerio.load(response.data);

    // Loop through table rows 
    $("tr").each(function() {   

      // Get column data
      const college_Name = $(this).find("td:nth-child(1)").text().trim();
      const college_Degree = $(this).find("td:nth-child(2)").text().trim();

      // Push to array  
      collegeData.push({
        college_Name,
        college_Degree
      });

    });

  } catch (error) {
    console.log(error);
  }

}

// Function to write JSON file 
async function writeJson() {

  // Stringify scraped data
  const jsonData = JSON.stringify(collegeData, null, 2);

  // Write JSON to file
  fs.writeFile("colleges.json", jsonData, (err) => {
    if (err) throw err;
    console.log("Data written to JSON");
  });

}

// Call functions
async function main() {
  await scrapeData();
  await writeJson();
}

main();