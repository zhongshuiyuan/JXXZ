﻿var vehicleColumn = echarts.init(document.getElementById('vehicleColumn'));
// 指定图表的配置项和数据
var option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['渣土车', '环卫车', '执法车'],
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        textStyle:
        {
            color: '#c4efdd',
        },
    },
    grid: {
        height: '100',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    color: ['#4D9847', '#B7AB57', '#489EB1'],
    xAxis: [
        {
            type: 'category',
            data: ['新城街道', '高照街道', '秀洲高新区'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#10C642',
                },
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#10C642',
                },
            },
        },
    ],
    series: [
        {
            name: '渣土车',
            type: 'bar',
            barWidth: '10%',
            data: [50, 45, 30],
        },
        {
            name: '环卫车',
            type: 'bar',
            barWidth: '10%',
            data: [35, 37, 40],
        },
        {
            name: '执法车',
            type: 'bar',
            barWidth: '10%',
            data: [25, 52, 45],
        }
    ],
    textStyle:
       {
           color: '#c4efdd',
       },
};



// 使用刚指定的配置项和数据显示图表。
vehicleColumn.setOption(option);