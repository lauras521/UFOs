// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  //Laura tells JS to use an empty string when creating the table
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  //Laura loop through each object in data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    //Laura add a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    //Laura loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    //The JavaScript keyword this is used to access the object in question. 
    //In the context of an event, it refers to the HTML element that received the 
    //event. In this case, this refers to the dropdown menu.

    //will initialize an array to store the value and id
    let changedElement=d3.select(this);
    //console.log(changedElement)

    // 4b. Save the value that was changed as a variable.
    //hold the value of the attribute that has changed
    let changedVariable=changedElement.property("value");
    //let changedVariable=d3.select("this");
    //console.log(changedVariable)

    // 4c. Save the id of the filter that was changed as a variable.
    //hold the id of the id attribute that has changed
    let changedFilter=changedElement.attr("id");
    //console.log(changedFilter)

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    //Laura check to see if a value was changed in the changedVariable and if it was then the id needs to be added to the filters{}
    if(changedVariable){
      filters[changedFilter]=changedVariable;}
    else{delete filters[changedFilter]};
    
    //filters = {city: "saint louis", state: "mo"} if text is entered for saint louis and mo in box this will show in console log
    //filters = {datetime: '1/13/2010',shape:'triangle"}
    console.log(filters);

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData=tableData
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

    //Object.entries gives the key and the value being output as separate elements
    //for Each loops through 

    //need to go separate the key and value within the filter variable
    // and see if the values from filter match the values cells in table data, if they do that row will stay and be shown in the table
    
    //Object.enteries(filters)  -->  if filters={shape: "triangle",datetime: "1/1/2010", city: "el cajon"}  
    //["shape","triangle"]
    //["datetime","1/1/2010"]
    
    //["city","el cajon"]

    //forEach(will go through each key value pair and then filter the filteredData array if )

    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(i => i[key] === value)
      console.log(key, value)
    });

  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  };
  
  // 2. Attach an event to listen for changes to each filter
  //detect what input elements have changed on the html and will run the updateFilters table
  //input type "text" for every list element that has an input box
  d3.selectAll('input').on('change',updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
