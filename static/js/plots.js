//Module 12 Belly Button Diversity
function buildMetadata(newSample) 
  {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == newSample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");

      PANEL.html("");
      Object.entries(result).forEach(function([key,value]){
        PANEL.append("h6").text(key.toUpperCase() + ": " + value + "\n"); }) ; 
    });
  }   

function optionChanged(newSample) {
    buildMetadata(newSample);
  //  buildCharts(newSample);
  }

function init() {
   var dropdown = d3.select("#selDataset");  
   
   d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((name) => {
        dropdown
              .append("option")
              .text(name)
              .property("value", name);
      });    
    const newSample =  sampleNames[0];           
    buildMetadata(newSample);
     //   buildCharts(newSample);
   })  
}

// Initialize the dashboard
init();
