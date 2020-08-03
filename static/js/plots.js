//Module 12 Belly Button Diversity

function buildCharts(newSample)
{
  d3.json("\\static\\js\\samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id === newSample);
    var result = resultArray[0];

    var topResults = result.sort((a, b) => b.sample_values - a.sample_values);
    
    var top10Results = topResults.slice(0,10);

    var values = top10Results.sample_values;
    var labels = top10Results.otu_ids;
    var display = top10Results.otu_labels;    

    var trace = {
      x: [values],
      y: [labels],
      hovertext: display,
      type: 'bar',
      orientation: 'h'
    };
     var data = [trace];
     var layout = {
      title: "Top Ten Species of Belly Button Bacteria",
      xaxis: { title: "Sample Values"},
      yaxis: { title: "Bacterial Species"}
     };
     
     Plotly.newPlot("bar", data, layout);
  });
} 

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
  //  buildCharts(newSample);
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
     //   buildCharts(firstSample);
    });  
}

// Initialize the dashboard
init();
