let myGraph = document.getElementById('myGraph');


let trace1 = {};
trace1.type = "bar"; //指定用標示
trace1.name = "Laborers"
trace1.x = [];
trace1.y = [];
trace1.x[0]="Revolving_loans";
trace1.x[1]="Cash_loans";
trace1.y[0] = Revolving_loans[0]['amount'];
trace1.y[1] = Cash_loans[0]['amount'];
trace1.text = trace1.y;
trace1.textfont={
    color : 'yellow',
    size : 20
}
trace1.marker={
    color :'blue',
}



let trace2 = {};
trace2.type = "bar"; //指定用標示
trace2.name = "Sales staff"
trace2.x = [];
trace2.y = [];
trace2.x[0]="Revolving_loans";
trace2.x[1]="Cash_loans";
trace2.y[0] = Revolving_loans[1]['amount'];
trace2.y[1] = Cash_loans[1]['amount'];
trace2.text = trace2.y;
trace2.textfont={
    color : 'blue',
    size : 20
}
trace2.marker={
    color :'orange',
}



let trace3 = {};
trace3.type = "bar"; //指定用標示
trace3.name = "Accountants"
trace3.x = [];
trace3.y = [];
trace3.x[0]="Revolving_loans";
trace3.x[1]="Cash_loans"; 
trace3.y[0] = Revolving_loans[2]['amount'];
trace3.y[1] = Cash_loans[2]['amount'];
trace3.text = trace3.y;
trace3.textfont={
    color : 'white',
    size : 20
}
trace3.marker={
    color :'green',
}


let trace4 = {};
trace4.type = "bar"; //指定用標示
trace4.name = "Cooking staff"
trace4.x = [];
trace4.y = [];
trace4.x[0]="Revolving_loans";
trace4.x[1]="Cash_loans"; 
trace4.y[0] = Revolving_loans[2]['amount'];
trace4.y[1] = Cash_loans[2]['amount'];
trace4.text = trace4.y;
trace4.textfont={
    color : 'black',
    size : 20
}
trace4.marker={
    color :'yellow',
}


let data = [];
data.push(trace1,trace2, trace3,trace4);


let layout = {
    barmode: 'stack',
    margin: {
        t: 50 //上面的空間
    }
}
// let layout = {
//     margin: {
//         t: 50 //上面的空間
//     },
//     xaxis: {
//         range: [0, 6]//X軸範圍，通常會設定欄位值的min跟max 加一點buffer)
//     },
//     yaxis: {
//         range: [0, 25]//Y軸範圍，通常會設定欄位值的min跟max 加一點buffer)
//     },
//     title: "Scatter * Line 我的第一個PlotyJS圖表",
//     updatemenus: [
//         {
//             y: 1.25,
//             x: 0.1,
//             yanchor: 'top',
//             buttons: [
//                 {
//                     method: 'restyle',
//                     args: ['visible', [true, false, false]],
//                     label: "Team A"
//                 },
//                 {
//                     method: 'restyle',
//                     args: ['visible', [false, true, false]],
//                     label: "Team B"
//                 },
//                 {
//                     method: 'restyle',
//                     args: ['visible', [false, false, true]],
//                     label: "Team C"
//                 },
//                 {
//                     method: 'restyle',
//                     args: ['visible', [true, true, true]],
//                     label: "Display All"
//                 }
//             ]


//         }
//     ]
// };


Plotly.newPlot(myGraph, data, layout);