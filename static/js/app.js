//import the data from data.js
const tableData=data;
//reference the HTML table using D3 - JS library that adds interactive functionality (i.e. listening for clicks)
var tbody = d3.select("tbody");

function buildTable(data) {
    //tells JS to use an empty string when creating the table
    tbody.html("");
    //loop through each object in data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //add a row to the table body
        let row=tbody.append('tr');
        //loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}
function handleClick(){
    // tells d3 to look for #datetime id in HTML tags, grab information and store it in date variable
    let date = d3.select("#datetime").property('value');
    //set a default filter and save it to a new variable
    let filteredData=tableData;
    //show only rows where date = t date filter created 
    //if statement syntax   if(condition){code to execute}
    // pseudocode practice if (a date is entered) {Filter the default data to show only the date entered};
    if(date){
        filteredData=filteredData.filter(row=>row.datetime===date);
    } //had ; here earlier in module and then they take it out at the bottom of 11.5.4
    //build table using f iltered data
    buildTable(filteredData)};

//listen for button click
d3.selectAll('#filter-btn').on('click',handleClick);


//build table when page loads
buildTable(tableData);