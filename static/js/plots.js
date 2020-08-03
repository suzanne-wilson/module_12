//Module 12 Belly Button Diversity
function buildMetadata(newSample) 
{
    d3.json("\\static\\js\\samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == newSample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");

      PANEL.html("");
      Object.entries(result).forEach(function([key,value]){
        PANEL.append("h6").text(key.toUpperCase() + ": " + value);
      })  
    });
}   

function optionChanged(newSample) {
 
    buildMetadata(newSample);
//       buildCharts(newSample);
  }

function init() {
  console.log('hello world!');
   var dropdown = d3.select("#selDataset");  
   var samples = "\\static\\js\\samples.json";
   d3.json(samples).then((data) => {
            data.names.forEach(function(name) {
            dropdown
              .append("option")
              .text(name)
              .property("value");
        });        
        const firstSample = samples[0];
        buildMetadata(firstSample);
    });  
}

// Initialize the dashboard
init();
