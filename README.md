# CunyFirst-API
# CUNY College Scraper and CSI CUNY Spring Courses Excel to JSON Converter

## CUNY College Scraper

This is a web scraper built with Node.js to extract college major programs from the CUNY website. It scrapes the data and saves it to a JSON file.

### Usage

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `node CunyFirstData.js` to execute the scraper
4. Scraper output will be saved to `colleges.json`

### Code Overview

#### `scrapeData()`

Makes an HTTP request to the CUNY website, loads HTML into Cheerio, and scrapes college names and degrees from table rows.

#### `writeJson()`

Converts the scraped data into JSON format and writes it to the `colleges.json` file.

#### `main()`

Executes the `scrapeData()` and `writeJson()` functions sequentially.

### Dependencies

- Axios: Makes HTTP requests to the CUNY website.
- Cheerio: Parses HTML and finds DOM elements.
- fs: Writes scraped data to JSON file.

### Future Improvements

1. Scrape additional data like program descriptions.
2. Expand the scraper to cover data across the entire CUNY course catalog.
3. Add a CI/CD workflow to run the scraper on a schedule for regular updates.
4. Containerize the application with Docker for easier deployment and management.

### Contributions

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

### License

This project is licensed under the [MIT License](LICENSE).

---

## CSI CUNY Spring Courses Excel to JSON Converter

This is a Node.js script to convert data from an Excel file containing CSI CUNY Spring courses into JSON format. The script utilizes the 'xlsx' library to read the Excel file and convert the data to JSON. It then writes the JSON data to a new file named `cuny_general_course.json`.

### Prerequisites

Before running the script, make sure you have the following installed:

- Node.js: Download and install Node.js from the official website (https://nodejs.org).
- xlsx: This script depends on the 'xlsx' library to read and write Excel files. To install it, run the following command in your terminal or command prompt:

```bash
npm install xlsx


