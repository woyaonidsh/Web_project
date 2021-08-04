var chart = echarts.init(document.getElementById('map'));
var option;

// PM2.5数据
var data = [{
    name: '北京',
    value: 27.47
}, {
    name: '天津',
    value: 76.04
}, {
    name: '上海',
    value: 73.65
}, {
    name: '重庆',
    value: 57.19
}, {
    name: '河北',
    value: 42.12
}, {
    name: '河南',
    value: 66.68
}, {
    name: '云南',
    value: 27.04
}, {
    name: '辽宁',
    value: 35
}, {
    name: '黑龙江',
    value: 35.28
}, {
    name: '湖南',
    value: 51.42
}, {
    name: '安徽',
    value: 61.87
}, {
    name: '山东',
    value: 90.36
}, {
    name: '新疆',
    value: 7.17
}, {
    name: '江苏',
    value: 67.65
}, {
    name: '浙江',
    value: 48.46
}, {
    name: '江西',
    value: 48.25
}, {
    name: '湖北',
    value: 52.18
}, {
    name: '广西',
    value: 47.58
}, {
    name: '甘肃',
    value: 14.27
}, {
    name: '山西',
    value: 30.79
}, {
    name: '内蒙古',
    value: 3.88
}, {
    name: '陕西',
    value: 28.29
}, {
    name: '吉林',
    value: 48.25
}, {
    name: '福建',
    value: 28.52
}, {
    name: '贵州',
    value: 49.94
}, {
    name: '广东',
    value: 40.89
}, {
    name: '青海',
    value: 1.73
}, {
    name: '西藏',
    value: 1.27
}, {
    name: '四川',
    value: 42.17
}, {
    name: '宁夏',
    value: 14.75
}, {
    name: '海南',
    value: 32.89
}, {
    name: '台湾',
    value: 19.3
}, {
    name: '香港',
    value: 45.71
}, {
    name: '澳门',
    value: 20,
}]

option = {
    title: {
        text: "全国各省份PM2.5指数分布图"
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            if (params.data) {
                return params.name + '<br/>PM2.5：' + params.data.value
            }
        }
    },
    visualMap: {
        show: false,
        type: 'continuous',
        orient: 'horizontal', //控制条横向
        bottom: 20,
        min: 0,
        max: 150,
        inRange: {
            color: ['#ffd200', '#ff0000']
        },
        text: ['高', '低'],  //
        // calculable: true, //是否显示拖把
    },
    series: [
        {
            type: 'map',
            mapType: 'china',
            // roam:true,
            label: {
                show: true
            },
            // 区域颜色
            itemStyle: {
                areaColor: '#ffff00'
            },
            //鼠标聚焦时的区域颜色
            emphasis: {
                itemStyle: {
                    areaColor: '#dede00'
                }
            },
            //虚拟数据
            data: data,
        }
    ],
}

option && chart.setOption(option);



// PM2.5柱状图
function center_down_left(province, data_2, data_10) {
    var chartDom = document.getElementById('center_down_left');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: province + "PM2.5和PM10含量",
            textStyle: {
                fontSize: 12
            }
        },
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
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['PM2.5', 'PM10']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                max: 200,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: 'PM2.5',
                type: 'bar',
                data: data_2
            },
            {
                name: 'PM10',
                type: 'bar',
                data: data_10
            }
        ]
    };

    option && myChart.setOption(option);
}

// 气体折线图
function center_down_right(province, data_U, data_V) {
    var chartDom = document.getElementById('right_up_right');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: province + '气体中的速度',
            textStyle: {
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['U（m/s）音速', 'V（m/s）风速']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'U（m/s）音速',
                type: 'line',
                stack: '总量',
                data: data_U
            },
            {
                name: 'V（m/s）风速',
                type: 'line',
                stack: '总量',
                data: data_V
            },
        ]
    };

    option && myChart.setOption(option);
}

// 空气中气体含量饼图
function left_center(province, data) {
    var chartDom = document.getElementById('left_center');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: province + '空气中气体含量比例',
            left: 'center',
            textStyle: {
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: '气体类型',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: data[0], name: 'SO2' },
                    { value: data[1], name: 'NO2' },
                    { value: data[2], name: 'CO' },
                    { value: data[3], name: 'O3' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    option && myChart.setOption(option);
}

// TEMP柱状图
function right_up_left(province, data) {
    var chartDom = document.getElementById('right_up_left');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: province + 'TEMP（K）',
            textStyle: {
                fontSize: 12
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function (params) {
                // console.log(params); // 当我们想要自定义提示框内容时，可以先将鼠标悬浮的数据打印出来，然后根据需求提取出来即可
                return params[0].name + "<br/>TEMP: " + params[0].data
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data,
            type: 'bar'
        }]
    };

    option && myChart.setOption(option);
}

// RH相对湿度柱状图
function right_up_right(province, data) {
    var chartDom = document.getElementById('right_up_right');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: province + 'RH(%)相对湿度',
            textStyle: {
                fontSize: 12
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function (params) {
                // console.log(params); // 当我们想要自定义提示框内容时，可以先将鼠标悬浮的数据打印出来，然后根据需求提取出来即可
                return params[0].name + "<br/>RH: " + params[0].data
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data,
            type: 'bar'
        }]
    };

    option && myChart.setOption(option);
}

chart.on('click', function (param) {
    // 城市中文名
    var cityName = param.name;
    if (cityName == "安徽") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [35.77, 33.59, 1.33, 27.52]);
        center_down_left(cityName, [61.87, 54.54, 42.83, 63.63, 78.26, 102.97, 120.49], [97.02, 81.94, 57.29, 75.81, 84.42, 122.33, 137.51]);
        center_down_right(cityName, [4.51, 3.54, 2.67, 1.34, 2.18, 0.63, 0.69], [-0.72, -7.85, -6.73, -3.33, -2.68, -2.51, -0.62]);
        right_up_left(cityName, [274.29, 270.07, 266.85, 268.45, 270.53, 271.57, 272.97]);
        right_up_right(cityName, [62.3, 62.98, 56.81, 60.07, 58.85, 57.02, 58.23]);
    }
    if (cityName == "山东") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [72.95, 36.69, 1.78, 22.19]);
        center_down_left(cityName, [90.36, 29.02, 49.84, 74.42, 122.58, 159.75, 196.97], [173.31, 53.46, 76.19, 113.77, 171.85, 227.67, 266.09]);
        center_down_right(cityName, [3.26, -3.52, -1.0, -1.8, -1.32, -1.39, -0.99], [-4.27, -6.09, -4.49, -0.43, -1.23, -1.43, -0.14]);
        right_up_left(cityName, [267.18, 262.27, 262.71, 263.74, 265.47, 266.84, 268.67]);
        right_up_right(cityName, [61.48, 53.66, 57.18, 55.34, 50.66, 60.31, 59.85]);
    }
    if (cityName == "宁夏") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [29.35, 39.3, 0.51, 52.36]);
        center_down_left(cityName, [14.75, 22.11, 35.58, 55.46, 72.3, 69.17, 42.57], [27.53, 29.41, 47.78, 80.16, 100.49, 97.62, 61.56]);
        center_down_right(cityName, [3.7, -2.85, -2.6, -0.57, 0.87, 3.1, 2.73], [-3.37, -2.28, 2.74, 1.67, -0.45, -0.57, -2.03]);
        right_up_left(cityName, [263.48, 258.85, 259.79, 261.75, 261.97, 265.03, 265.89]);
        right_up_right(cityName, [50.09, 53.18, 43.13, 54.04, 40.16, 32.86, 34.59]);
    }
    if (cityName == "香港") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [13.61, 14.54, 0.99, 28.72]);
        center_down_left(cityName, [45.71, 62.95, 57.83, 33.55, 37.52, 44.88, 51.16], [73.3, 94.66, 79.37, 50.91, 56.01, 67.66, 79.44]);
        center_down_right(cityName, [-1.96, -2.85, -3.8, -3.18, -2.38, -2.02, -1.83], [-5.97, -6.61, -11.21, -10.83, -8.94, -9.57, -7.63]);
        right_up_left(cityName, [285.66, 288.0, 285.61, 281.87, 283.89, 284.5, 286.32]);
        right_up_right(cityName, [48.86, 57.16, 68.91, 72.86, 72.26, 72.18, 70.62]);
    }
    if (cityName == "贵州") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [37.12, 33.61, 0.65, 49.94]);
        center_down_left(cityName, [49.94, 66.5, 57.4, 55.11, 61.59, 75.81, 82.79], [68.98, 93.07, 65.09, 57.48, 68.69, 87.47, 94.97]);
        center_down_right(cityName, [-0.45, -3.11, -4.54, -3.11, -2.64, -2.31, -1.43], [1.28, 0.67, -2.75, 1.67, 0.12, 0.69, 0.36]);
        right_up_left(cityName, [277.28, 278.01, 271.25, 271.24, 272.96, 272.82, 273.82]);
        right_up_right(cityName, [52.53, 62.57, 72.14, 76.45, 71.73, 69.93, 74.94]);
    }
    if (cityName == "甘肃") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [4.97, 9.07, 0.39, 58.83]);
        center_down_left(cityName, [14.27, 15.64, 19.11, 26.37, 28.09, 30.38, 24.48], [17.53, 19.72, 23.28, 31.87, 32.85, 34.33, 28.36]);
        center_down_right(cityName, [2.33, -2.2, -1.54, 0.12, 1.81, 2.23, 2.14], [-0.76, -0.15, 1.71, 1.11, 0.04, -0.38, -1.02]);
        right_up_left(cityName, [263.08, 259.33, 259.2, 260.48, 261.69, 262.44, 263.16]);
        right_up_right(cityName, [42.8, 53.74, 54.85, 55.46, 49.75, 50.8, 44.96]);
    }
    if (cityName == "福建") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [12.78, 14.38, 0.45, 47.53]);
        center_down_left(cityName, [28.52, 39.27, 27.78, 33.9, 43.71, 38.98, 37.7], [43.7, 55.19, 34.32, 39.1, 45.63, 50.2, 51.1]);
        center_down_right(cityName, [-1.77, -1.96, -2.53, -0.86, -0.14, -0.11, -0.41], [-1.82, -2.93, -5.77, -4.23, -3.23, -2.94, -2.2]);
        right_up_left(cityName, [279.55, 282.53, 278.6, 276.12, 277.52, 278.57, 280.55]);
        right_up_right(cityName, [51.47, 75.81, 82.3, 85.9, 89.03, 89.73, 87.66]);
    }
    if (cityName == "河南") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [42.77, 33.99, 1.67, 28.63]);
        center_down_left(cityName, [66.68, 54.27, 55.5, 89.66, 129.56, 195.0, 203.55], [140.77, 80.27, 81.98, 124.17, 184.8, 256.98, 258.06]);
        center_down_right(cityName, [-3.1, -5.32, -3.14, 0.07, -0.22, -0.42, 0.0], [-0.72, -7.85, -6.73, -3.33, -2.68, -2.51, -0.62]);
        right_up_left(cityName, [272.95, 267.3, 265.47, 266.94, 269.68, 270.65, 272.99]);
        right_up_right(cityName, [42.01, 47.53, 38.71, 36.36, 34.55, 37.32, 36.55]);
    }
    if (cityName == "吉林") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [18.66, 14.1, 0.66, 30.95]);
        center_down_left(cityName, [48.25, 32.2, 25.54, 28.76, 37.59, 44.83, 75.12], [57.12, 38.26, 31.78, 38.7, 43.88, 49.6, 86.56]);
        center_down_right(cityName, [2.96, 5.88, 6.67, 5.02, 5.95, 3.16, 1.31], [-0.05, 0.49, 0.45, 4.04, 0.26, 0.54, -1.17]);
        right_up_left(cityName, [247.36, 245.54, 250.43, 254.04, 255.14, 250.98, 250.18]);
        right_up_right(cityName, [71.28, 67.06, 68.26, 65.86, 70.89, 71.94, 73.46]);
    }
    if (cityName == "内蒙古") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [4.46, 4.65, 0.31, 46.79]);
//        center_down_left(cityName, [3.88, 3.96, 7.39, 16.3, 16.73, 17.79, 15.0], [5.18, 5.02, 9.54, 20.81, 21.68, 23.18, 20.76]);
        center_down_right(cityName, [4.14, 3.75, 3.24, 4.08, 4.18, 4.21, 3.82], [-4.18, -3.54, -0.44, 0.78, -1.47, 0.01, -1.83]);
        right_up_left(cityName, [247.98, 247.98, 250.71, 252.35, 252.87, 252.74, 251.4]);
//        right_up_right(cityName, [63.5, 60.53, 56.84, 52.79, 51.62, 55.83, 62.75]);
    }
    if (cityName == "新疆") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [2.96, 2.8, 0.22, 64.26]);
        center_down_left(cityName, [7.17, 7.33, 7.52, 8.36, 9.26, 8.74, 8.46], [8.11, 8.11, 8.41, 9.11, 10.15, 9.42, 9.28]);
        center_down_right(cityName, [1.4, 0.96, 0.75, 2.06, 2.41, 1.44, 1.01], [0.96, 0.35, 1.16, 0.79, 0.53, 0.49, 0.48]);
        right_up_left(cityName, [262.72, 260.72, 259.4, 258.91, 258.47, 258.75, 259.46]);
        right_up_right(cityName, [46.25, 55.14, 54.93, 55.63, 56.94, 55.42, 53.55]);
    }
    if (cityName == "广西") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [17.56, 18.24, 0.52, 48.91]);
        center_down_left(cityName, [47.58, 65.68, 54.43, 49.5, 52.82, 61.63, 72.03], [56.83, 75.92, 60.76, 55.06, 59.98, 71.08, 82.43]);
        center_down_right(cityName, [-2.06, -3.42, -4.64, -3.16, -2.67, -2.74, -2.48], [-1.91, -0.83, -8.1, -4.86, -3.06, -4.39, -2.97]);
        right_up_left(cityName, [280.88, 283.95, 278.53, 275.94, 277.73, 278.24, 279.18]);
        right_up_right(cityName, [41.05, 55.2, 72.13, 72.48, 73.13, 66.45, 65.1]);
    }
    if (cityName == "江苏") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [48.36, 30.41, 1.72, 26.34]);
        center_down_left(cityName, [67.65, 38.77, 37.22, 55.75, 80.84, 113.21, 129.35], [124.14, 72.69, 56.43, 75.66, 107.46, 152.44, 177.66]);
        center_down_right(cityName, [5.13, 1.0, 2.38, 1.02, 1.45, 1.03, 0.77], [-1.18, -8.55, -7.14, -4.61, -4.14, -3.62, -2.35]);
        right_up_left(cityName, [273.16, 270.12, 268.04, 269.64, 270.72, 271.95, 273.13]);
        right_up_right(cityName, [67.27, 57.19, 67.59, 66.7, 58.34, 56.68, 55.04]);
    }
    if (cityName == "湖北") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [35.0, 26.11, 0.67, 46.14]);
        center_down_left(cityName, [52.18, 67.81, 48.27, 72.03, 101.99, 137.76, 152.0], [64.11, 77.95, 55.73, 76.69, 103.98, 134.84, 146.26]);
        center_down_right(cityName, [0.53, -6.17, -3.58, -2.7, -1.46, -1.15, -0.02], [-0.28, -4.84, -4.21, -1.43, -1.28, -1.13, -0.4]);
        right_up_left(cityName, [275.54, 271.74, 268.92, 269.14, 271.11, 272.07, 273.51]);
        right_up_right(cityName, [47.48, 58.7, 44.67, 43.92, 46.18, 50.25, 49.57]);
    }
    if (cityName == "江西") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [20.72, 24.22, 0.56, 45.31]);
        center_down_left(cityName, [48.25, 68.85, 39.63, 53.49, 66.07, 78.44, 91.43], [59.19, 86.49, 50.2, 58.47, 70.87, 82.84, 97.61]);
        center_down_right(cityName, [-0.65, -3.23, -3.21, -2.14, -1.45, -1.15, -0.84], [-1.02, -5.16, -8.04, -4.76, -3.95, -3.79, -3.08]);
        right_up_left(cityName, [276.81, 278.15, 273.11, 271.71, 272.69, 273.46, 274.61]);
        right_up_right(cityName, [49.88, 64.57, 70.16, 82.16, 85.08, 87.63, 85.64]);
    }
    if (cityName == "山西") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [30.66, 32.8, 2.07, 37.88]);
        center_down_left(cityName, [30.79, 29.89, 38.5, 71.33, 83.05, 92.88, 124.89], [43.84, 40.01, 52.32, 91.13, 111.14, 118.18, 145.32]);
        center_down_right(cityName, [4.85, 2.46, 1.11, 1.66, 1.67, 2.49, 3.31], [-5.01, -5.71, -3.24, -0.9, -2.71, -1.05, -1.69]);
        right_up_left(cityName, [259.05, 254.48, 256.0, 259.79, 261.93, 263.7, 265.66]);
        right_up_right(cityName, [51.4, 46.19, 40.33, 35.29, 33.45, 30.18, 37.91]);
    }
    if (cityName == "台湾") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [6.85, 5.93, 0.26, 48.53]);
        center_down_left(cityName, [19.3, 15.92, 15.25, 9.03, 9.82, 11.19, 22.7], [23.12, 19.73, 23.59, 15.41, 16.23, 17.95, 30.79]);
        center_down_right(cityName, [-0.93, -0.46, -3.21, -2.27, -0.77, -0.44, -0.33], [-1.26, -2.37, -6.46, -4.57, -4.1, -3.54, -2.71]);
        right_up_left(cityName, [285.02, 288.07, 287.71, 286.96, 287.63, 288.47, 289.0]);
        right_up_right(cityName, [79.38, 82.2, 82.67, 82.17, 83.98, 79.37, 83.96]);
    }
    if (cityName == "四川") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [15.68, 16.43, 0.57, 70.51]);
        center_down_left(cityName, [42.17, 47.17, 34.73, 35.68, 39.33, 44.17, 45.21], [53.97, 59.15, 41.02, 37.7, 41.49, 47.61, 52.69]);
        center_down_right(cityName, [3.57, 2.77, 2.01, 4.79, 4.11, 4.64, 3.08], [-0.63, -0.1, 1.9, 1.4, 1.01, 1.95, 1.11]);
        right_up_left(cityName, [269.82, 273.38, 268.83, 270.31, 271.57, 271.16, 269.45]);
        right_up_right(cityName, [35.17, 39.06, 67.5, 58.62, 50.52, 48.3, 55.02]);
    }
    if (cityName == "河北") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [41.62, 29.11, 1.33, 41.58]);
        center_down_left(cityName, [49.12, 24.89, 51.9, 97.54, 130.58, 166.43, 203.77], [85.94, 35.79, 79.45, 143.56, 186.09, 234.93, 286.37]);
        center_down_right(cityName, [4.37, 4.38, 2.72, 2.82, 1.7, 1.55, 1.39], [-6.73, -6.42, -3.54, -0.71, -2.99, -1.47, -2.66]);
        right_up_left(cityName, [257.79, 255.1, 257.42, 259.42, 260.8, 261.18, 262.01]);
        right_up_right(cityName, [46.3, 42.46, 44.02, 44.54, 42.29, 49.03, 54.39]);
    }
    if (cityName == "重庆") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [33.15, 29.43, 0.82, 53.14]);
        center_down_left(cityName, [57.19, 65.7, 48.66, 53.11, 68.53, 84.07, 88.92], [77.76, 92.72, 67.95, 63.01, 81.81, 106.4, 112.16]);
        center_down_right(cityName, [-1.29, -6.04, -5.36, -4.37, -2.9, -2.65, -1.25], [0.18, 0.98, 2.43, 2.46, 0.74, 1.18, -0.08]);
        right_up_left(cityName, [276.77, 276.76, 272.4, 272.06, 273.54, 273.59, 274.19]);
        right_up_right(cityName, [34.31, 50.71, 51.35, 51.33, 52.26, 59.16, 64.1]);
    }
    if (cityName == "西藏") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [0.15, 0.26, 0.12, 81.51]);
        center_down_left(cityName, [1.27, 2.69, 3.82, 3.99, 4.29, 3.86, 4.01], [1.5, 3.33, 4.37, 4.8, 5.2, 4.73, 4.87]);
        center_down_right(cityName, [7.16, 10.56, 8.86, 11.64, 10.38, 8.94, 7.92], [-0.25, 2.27, 1.4, 1.55, 2.11, 1.09, 0.51]);
        right_up_left(cityName, [263.19, 264.78, 260.3, 261.27, 260.01, 258.51, 258.0]);
        right_up_right(cityName, [34.62, 36.22, 45.02, 44.25, 44.67, 42.5, 43.39]);
    }
    if (cityName == "广东") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [16.96, 16.15, 0.62, 39.62]);
        center_down_left(cityName, [40.89, 52.01, 45.45, 34.49, 38.39, 46.19, 54.43], [55.07, 69.01, 58.83, 43.46, 48.31, 57.91, 67.04]);
        center_down_right(cityName, [-1.95, -2.69, -3.05, -2.37, -1.76, -1.55, -1.47], [-3.9, -4.18, -9.16, -7.36, -5.84, -6.53, -5.22]);
        right_up_left(cityName, [282.27, 284.96, 281.56, 278.38, 280.09, 280.41, 282.21]);
        right_up_right(cityName, [43.23, 57.49, 73.27, 73.69, 74.52, 76.22, 74.51]);
    }
    if (cityName == "云南") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [11.64, 10.88, 0.45, 59.43]);
        center_down_left(cityName, [27.04, 26.54, 44.17, 34.79, 28.16, 27.66, 27.53], [32.5, 32.69, 50.02, 41.57, 34.07, 34.17, 34.22]);
        center_down_right(cityName, [2.7, 4.07, -0.9, 4.26, 5.67, 4.65, 5.74], [2.03, 2.59, 2.67, 3.53, 2.75, 3.22, 4.11]);
        right_up_left(cityName, [279.9, 282.37, 278.56, 280.27, 282.0, 281.24, 281.21]);
        right_up_right(cityName, [78.35, 69.47, 85.91, 80.82, 67.76, 65.26, 69.58]);
    }
    if (cityName == "海南") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [11.71, 9.35, 0.32, 57.28]);
        center_down_left(cityName, [32.89, 38.88, 39.48, 40.73, 38.96, 45.54, 46.48], [41.54, 47.68, 50.14, 46.45, 46.06, 53.76, 52.92]);
        center_down_right(cityName, [-2.75, -3.96, -5.93, -4.69, -3.89, -3.32, -3.23], [-3.35, -1.63, -5.38, -6.23, -4.58, -5.19, -4.16]);
        right_up_left(cityName, [289.07, 291.75, 291.31, 289.16, 289.39, 288.77, 289.48]);
        right_up_right(cityName, [78.19, 87.66, 87.18, 87.33, 87.08, 87.18, 86.04]);
    }
    if (cityName == "浙江") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [26.31, 29.52, 1.02, 35.89]);
        center_down_left(cityName, [48.46, 66.24, 36.23, 56.82, 67.23, 60.96, 75.86], [71.72, 97.04, 47.89, 57.71, 66.19, 63.03, 81.3]);
        center_down_right(cityName, [1.84, -1.85, -0.38, -0.63, 0.25, 0.15, 0.91], [-0.2, -5.93, -7.5, -5.26, -4.28, -3.99, -3.0]);
        right_up_left(cityName, [277.1, 276.92, 272.33, 272.21, 272.61, 273.32, 273.84]);
        right_up_right(cityName, [43.25, 74.5, 76.06, 89.74, 90.81, 91.99, 90.9]);
    }
    if (cityName == "黑龙江") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [9.03, 7.48, 6.49, 0.51, 43.22]);
        center_down_left(cityName, [35.28, 27.32, 16.03, 23.48, 19.62, 23.52, 37.29], [40.48, 32.16, 18.84, 28.26, 22.42, 26.19, 42.87]);
        center_down_right(cityName, [3.94, 5.21, 6.52, 4.59, 6.34, 5.06, 3.4], [-1.36, -2.02, -1.85, 2.33, -1.85, -1.75, -1.93]);
        right_up_left(cityName, [243.83, 243.78, 247.16, 249.41, 248.74, 245.28, 243.07]);
        right_up_right(cityName, [68.33, 66.59, 66.85, 70.33, 67.52, 67.09, 68.13]);
    }
    if (cityName == "青海") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [0.53, 0.84, 0.15, 77.26]);
        center_down_left(cityName, [1.73, 2.21, 3.51, 3.3, 2.94, 3.86, 2.73], [2.3, 3.04, 4.42, 4.14, 3.72, 4.83, 3.46]);
        center_down_right(cityName, [8.39, 6.59, 3.35, 7.2, 4.43, 3.11, 2.38], [-0.51, -0.64, 0.5, -0.26, -0.12, -0.87, -0.32]);
        right_up_left(cityName, [258.5, 261.52, 257.56, 258.96, 258.88, 257.33, 256.59]);
        right_up_right(cityName, [33.15, 42.61, 56.28, 44.72, 44.64, 51.77, 44.5]);
    }
    if (cityName == "上海") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [42.32, 25.86, 1.6, 16.23]);
        center_down_left(cityName, [73.65, 55.78, 36.21, 45.65, 51.61, 80.41, 125.67], [105.1, 93.83, 45.81, 50.12, 50.41, 81.82, 121.78]);
        center_down_right(cityName, [5.58, 0.25, 2.78, 1.25, 1.8, 1.76, 1.91], [-0.07, -8.81, -8.36, -6.94, -6.28, -5.45, -4.48]);
        right_up_left(cityName, [276.59, 276.44, 273.89, 274.92, 275.22, 275.52, 275.73]);
        right_up_right(cityName, [63.79, 68.65, 80.65, 80.11, 81.29, 75.58, 78.55]);
    }
    if (cityName == "北京") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [22.05, 14.14, 0.99, 41.74]);
        center_down_left(cityName, [27.47, 12.52, 25.71, 86.53, 89.87, 105.15, 125.91], [41.24, 20.25, 38.76, 127.6, 119.51, 143.69, 167.35]);
        center_down_right(cityName, [3.75, 5.48, 3.84, 3.07, 2.02, 1.5, 1.07], [-6.64, -7.05, -4.78, -1.77, -3.93, -1.6, -2.93]);
        right_up_left(cityName, [258.65, 256.75, 259.62, 261.21, 263.14, 263.12, 264.27]);
        right_up_right(cityName, [39.22, 36.37, 39.79, 40.39, 36.0, 43.51, 42.78]);
    }
    if (cityName == "天津") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [52.06, 28.46, 2.19, 38.15]);
        center_down_left(cityName, [76.04, 14.4, 30.85, 148.56, 123.89, 160.24, 282.29], [103.65, 36.79, 55.75, 209.6, 166.05, 212.5, 385.68]);
        center_down_right(cityName, [2.71, 4.69, 4.07, 4.27, 2.16, 0.07, -0.2], [-7.29, -6.79, -5.38, 0.62, -3.31, -1.32, -1.78]);
        right_up_left(cityName, [261.79, 259.19, 261.15, 261.51, 263.88, 263.68, 264.62]);
        right_up_right(cityName, [42.15, 38.28, 41.2, 53.71, 42.05, 54.72, 54.13]);
    }

    if (cityName == "辽宁") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [31.97, 20.71, 0.84, 33.19]);
        center_down_left(cityName, [35.0, 24.26, 30.45, 59.23, 51.82, 63.32, 97.66], [47.83, 30.73, 41.33, 82.93, 68.28, 86.11, 137.27]);
        center_down_right(cityName, [2.8, 4.53, 3.31, 1.88, 2.66, 0.33, 0.41], [-5.42, -4.35, -3.38, 1.04, -3.76, -2.09, -3.98]);
        right_up_left(cityName, [252.96, 251.68, 255.67, 258.63, 258.84, 256.94, 256.6]);
        right_up_right(cityName, [61.88, 57.41, 58.97, 64.26, 63.33, 68.19, 72.98]);
    }

    if (cityName == "陕西") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [17.15, 26.85, 0.58, 47.95]);
        center_down_left(cityName, [28.29, 36.43, 27.91, 64.12, 87.02, 98.14, 84.68], [41.95, 54.84, 37.04, 80.29, 106.06, 114.3, 101.41]);
        center_down_right(cityName, [1.35, -3.79, -2.37, -1.86, -0.34, 0.2, 1.28], [-2.43, -2.68, -0.95, 0.72, -1.42, -0.61, -2.04]);
        right_up_left(cityName, [268.34, 263.09, 261.1, 263.29, 265.5, 266.97, 268.88]);
        right_up_right(cityName, [40.85, 53.27, 45.27, 49.13, 45.04, 38.77, 41.75]);
    }
    if (cityName == "湖南") {
//        alert(cityName + "空气质量数据展示!");
        left_center(cityName, [17.15, 26.85, 0.58, 47.95]);
        center_down_left(cityName, [28.29, 36.43, 27.91, 64.12, 87.02, 98.14, 84.68], [41.95, 54.84, 37.04, 80.29, 106.06, 114.3, 101.41]);
        center_down_right(cityName, [1.35, -3.79, -2.37, -1.86, -0.34, 0.2, 1.28], [-2.43, -2.68, -0.95, 0.72, -1.42, -0.61, -2.04]);
        right_up_left(cityName, [268.34, 263.09, 261.1, 263.29, 265.5, 266.97, 268.88]);
        right_up_right(cityName, [40.85, 53.27, 45.27, 49.13, 45.04, 38.77, 41.75]);
    }
});



