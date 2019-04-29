// from data.js
var tableData = data;

// * Using the UFO dataset provided in the form of an array 
// of JavaScript objects, write code that appends a table to 
// your web page and then adds new rows of data for each UFO 
// sighting.
// referece for tbody
var tbody = d3.select("#ufo-table>tbody"); 

// YOUR CODE HERE!
tableData.forEach(function(ufoData) {
    var row = tbody.append('tr');
    Object.entries(ufoData).forEach(([key, value])=> {
        row.append('td').text(value);
    })
});

// * Use a date form in your HTML document and write JavaScript
//  code that will listen for events and search through the 
//  `date/time` column to find rows that match user input.

var button = d3.select("#filter-btn");

// attach event on selected element to event handler function

button.on("click", eventHandler);

function eventHandler() {
    d3.event.preventDefault();
    inputDate = d3.select(".form-control").node().value;
    // inputDate = d3.select(".form-control").property('value');
    console.log(inputDate);
    tbody.html("")
    filteredData = tableData.filter(data=> data.datetime === inputDate);
    console.log(filteredData);
    if (Object.keys(filteredData).length === 0) {
        tbody.html("<tr><td>Date out of range [1/1/2010 - 1/13/2010]</td></tr>");
    } else {
    filteredData.forEach(data=> {
        var row = tbody.append('tr');
        Object.values(data).forEach(val=> row.append('td').text(val));
    })}; 
}

