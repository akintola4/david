        const ctx = document.getElementById('myChart-1');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["item1", "item2", "item3", "item4", "item5"],
                datasets: [{
                    label: 'This month',
                    data: [5, 10, 15, 20, 25],
                   // borderWidth: 2,
                    //borderColor: '#fff',
                   backgroundColor:'lightblue',
                    color:'#fff',
                    tension: 0.3,
                }]
            },
            options: {
                responsive: true,
                scaleFontColor: "#FFFFFF",
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            borderColor: "#fff",
                            lineWidth: 0
                        }

                    },
                    x: {
                        beginAtZero: true,
                        grid: {
                            borderColor: "#fff",
                            lineWidth: 0,
                        }

                    }
                }
            }
        });