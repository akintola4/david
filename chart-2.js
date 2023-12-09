const ctx2 = document.getElementById('myChart-2');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ["Item1", "item3"],
        datasets: [{
            label: 'This month',
            data: [10000000, 15000000],
           // borderWidth: 2,
            //borderColor: '#fff',
           backgroundColor:[
            'blue','lightblue'
           ], hoverOffset: 10,
            color:'#fff',
            tension: 0.3,
        }]
    },
});