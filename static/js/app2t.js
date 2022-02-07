// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (Data-Driven Document)
var tbody = d3.select("tbody");

// Create function to iterate through the list of data(object) and append into a table format.
function buildTable(data) {
    // First, clear out any existing data to prevent duplicates.
    tbody.html("");

    // Next, loop through each object in the data
    // Append a row and cells for each value
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Loop through each field in the dataRow
        // and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });   

    // Function to filter data by date
    function handleClick() {

        // Grab the datetime value from the filter
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;

        // Check to see if a date was entereed and filter data by date
        if (date) {
            // Appply 'filter' to data table to keep rows where
            // 'datetime' value matches the filter value
            filteredData = filteredData.filter(row => row.datetime === date);
        };

        // Rebuild the table using the filtered data
        //@NOTE: if no date was entered, then filteredData will
        // just be original tableData.
        buildTable(filteredData);
    };

    // Attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);

}

// Build the table when the page loads
buildTable(tableData);