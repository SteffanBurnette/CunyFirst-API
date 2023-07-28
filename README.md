# CunyFirst-API
CUNY College Scraper
This is a web scraper built with Node.js to extract college major programs from the CUNY website. It scrapes the data and saves it to a JSON file.

Usage
Clone the repo
Run npm install to install dependencies
Run node index.js to execute the scraper
Scraper output will be saved to colleges.json
Code Overview
scrapeData(): Makes HTTP request to CUNY website, loads HTML into Cheerio, and scrapes college name and degree from table rows
writeJson(): Converts scraped data into JSON and writes to colleges.json file
main(): Executes scrape and write functions sequentially
Dependencies
Axios: Makes HTTP requests to CUNY website
Cheerio: Parses HTML and finds DOM elements
fs: Writes scraped data to JSON file
Future Improvements
Scrape additional data like program descriptions
Expand to scrape data across entire CUNY course catalog
Add CI/CD workflow to run scraper on schedule
Containerize application with Docker
Let me know if you would like me to expan
