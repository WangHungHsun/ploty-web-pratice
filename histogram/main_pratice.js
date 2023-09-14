d3.csv('new_search_clear.csv').then(
    res =>{
        console.log('Local.CSV:',res);

        let myGraph = document.getElementById('myGraph');

        let trace1 = {};
        trace1.type = "histogram";
        trace1.name = "google rating";
        trace1.opacity =0.3;
        trace1.x=[]
        trace1.marker ={
            color:'green'
        };
        for(let i=0;i<res.length;i++){
            trace1.x.push(res[i].rating);
        }

        let trace2 = {};
        trace2.type = "histogram";
        trace2.name = "model rating";
        trace2.opacity =0.5;
        trace2.marker ={
            color:'blue'
        };
        trace2.x=[]

        for(let i=0;i<res.length;i++){
            trace2.x.push(res[i].new_star_label);
        }
        let data = [];
        data.push(trace1);
        data.push(trace2);
        

        let layout = {
            margin: {
                t: 50
            },
            title:"旅遊專題貼標",
            barmode:"overlay",
            // barmode:'stack,
        };


        Plotly.newPlot(myGraph, data, layout);
}

);

