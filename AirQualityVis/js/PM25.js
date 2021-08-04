var chartDom = document.getElementById('center_down_left');
var myChart = echarts.init(chartDom);
var option;
option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},
	toolbox: {
		feature: {
			dataView: {show: true, readOnly: false},
			magicType: {show: true, type: ['line', 'bar']},
			restore: {show: true},
			saveAsImage: {show: true}
		}
	},
	legend: {
		data: ['PM2.5', 'PM10', '平均温度']
	},
	xAxis: [
		{
			type: 'category',
			data: ['1', '5', '10', '15', '20', '25', '30'],
			axisPointer: {
				type: 'shadow'
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '  颗粒物含量μg/m³',
			min: 0,
			max: 250,
			interval: 50,
			axisLabel: {
				formatter: '{value}'
			}
		},
		{
			type: 'value',
			name: '温度',
			min: 0,
			max: 25,
			interval: 5,
			axisLabel: {
				formatter: '{value} °C'
			}
		}
	],
	series: [
		{
			name: 'PM2.5',
			type: 'bar',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
		},
		{
			name: 'PM10',
			type: 'bar',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		},
		{
			name: '平均温度',
			type: 'line',
			yAxisIndex: 1,
			data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
		}
	]
};

option && myChart.setOption(option);