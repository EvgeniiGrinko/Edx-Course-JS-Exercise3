var parameters = {
    target: '#myFunction',
    data: [{
        fn: 'sin(x)',
        color: 'green'
    },
{
    fn: 'sin(x^3)',
    color: 'black'
},
{
    fn: 'cos(x)',
    color: 'blue'
}
],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
};
functionPlot(parameters);