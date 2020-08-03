
function buildCharts(newSample)
{
    d3.json("\\static\\js\\samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id === newSample);
        var result = resultArray[0];
        var unsortedResults = result.sample_values;
        var topResults = unsortedResults.sort((a, b) => b - a);
        
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
