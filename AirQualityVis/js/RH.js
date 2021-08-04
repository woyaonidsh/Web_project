var chartDom = document.getElementById('right_up_right');
var myChart = echarts.init(chartDom);
var option;

option = {
	title: {
        text: 'RH(%)相对湿度'
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
