document.addEventListener('DOMContentLoaded', function() {
    function createDoughnutChart(elementId, skillPercentage, chartTitle) {
        var ctx = document.getElementById(elementId).getContext('2d');
        var chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [chartTitle, 'Remaining'],
                datasets: [{
                    data: [skillPercentage, 100 - skillPercentage],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)', // 蓝色
                        'rgba(255, 255, 255, 0.2)' // 白色
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)', // 蓝色
                        'rgba(255, 255, 255, 1)' // 白色
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                cutoutPercentage: 60,
                maintainAspectRatio: false,
                responsive: false,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },  
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                title: {
                    display: true,
                    text: chartTitle, // 添加图表标题
                    fontSize: 50, // 标题字体大小
                    fontColor: 'black' // 标题字体颜色
                },
                plugins: {
                    datalabels: {
                        color: 'black',
                        formatter: (value, ctx) => {
                            return value + '%';
                        },
                        anchor: 'center',
                        align: 'center',
                        font: {
                            size: 50
                        }
                    }
                }
            }
        });
    }

    createDoughnutChart('communicationChart', 85, '溝通/85%');
    createDoughnutChart('designChart', 80, '設計/80%');
    createDoughnutChart('postProductionChart', 70, '後製/70%');
    createDoughnutChart('graphicEditingChart', 70, '企劃/70%');
});

/*這裡使用了CHATGPT*/
