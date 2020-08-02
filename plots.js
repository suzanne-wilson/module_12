function init() {
  
function updatePlotly() {

};

function optionChanged(sample) {
    var dropdownMenu = d3.select("#dropdownMenu");
    var sample = dropdownMenu.property("value");
    
    buildMetadata(sample);
    buildCharts(sample);
  }
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("ID: ").text(resultArray.name);
      PANEL.append("Ethnicity: ").text(resultArray.ethnicity);
      PANEL.append("Gender: ").text(resultArray.gender);
      PANEL.append("Age: ").text(resultArray.age);
      PANEL.append("h6").text(result.location);
      PANEL.append("bbtype: ").text(resultArray.bbtype);
      PANEL.append("wfreq: ").text(resultArray.wfreq);
    });
   }
} 
  
init();
