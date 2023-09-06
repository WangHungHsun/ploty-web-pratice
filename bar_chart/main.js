let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar"; //指定用標示
trace1.name = "Taipei Zoo"
trace1.x = [];
trace1.y = [];
for (let i = 0; i < animals_Taipei_Zoo.length; i++) {
    trace1.x[i] = animals_Taipei_Zoo[i]['name'];
    trace1.y[i] = animals_Taipei_Zoo[i]['count'];
    // trace1.text[i] = animals_Taipei_Zoo[i][2];
}


let trace2 = {};
trace2.type = "bar"; //指定用標示
trace2.name = "Singapore Zoo"
trace2.x = [];
trace2.y = [];
for (let i = 0; i < animals_Singapore_Zoo.length; i++) {
    trace2.x[i] = animals_Singapore_Zoo[i]['name'];
    trace2.y[i] = animals_Singapore_Zoo[i]['count'];
    // trace2.text[i] = animals_Taipei_Zoo[i][2];
}



let data = [];
data.push(trace1, trace2);


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