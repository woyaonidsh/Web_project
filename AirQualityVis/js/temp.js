var chartDom = document.getElementById('right_up_left');
var myChart = echarts.init(chartDom);
var option;

option = {
	title: {
        text: 'TEMP（K）'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};

option && myChart.setOption(option);
