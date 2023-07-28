# CunyFirst-API
# CUNY College Scraper

This is a web scraper built with Node.js to extract college major programs from the CUNY website. It scrapes the data and saves it to a JSON file.

## Usage

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `node index.js` to execute the scraper
4. Scraper output will be saved to `colleges.json`

## Code Overview

### `scrapeData()`

Makes an HTTP request to the CUNY website, loads HTML into Cheerio, and scrapes college names and degrees from table rows.

### `writeJson()`

Converts the scraped data into JSON format and writes it to the `colleges.json` file.

### `main()`

Executes the `scrapeData()` and `writeJson()` functions sequentially.

## Dependencies

- Axios: Makes HTTP requests to the CUNY website.
- Cheerio: Parses HTML and finds DOM elements.
- fs: Writes scraped data to JSON file.

## Future Improvements

1. Scrape additional data like program descriptions.
2. Expand the scraper to cover data across the entire CUNY course catalog.
3. Add a CI/CD workflow to run the scraper on a schedule for regular updates.
4. Containerize the application with Docker for easier deployment and management.

## Contributions

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

