<template>
    <div ref="chart" :style="{ width: '100%', height: '800px' }"></div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

export default {
    name: 'Echarts',
    setup() {
        const chart = ref();

        onMounted(() => {
            const myChart = echarts.init(chart.value);

            const option = {
                tooltip: {
                    formatter: function (params) {
                        if (params.dataType === 'node') {
                            return `${params.data.name}<br/>治愈率：50%<br/>治疗方法：多浇水`;
                        }
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    textStyle: {
                        color: '#000'
                    },
                    extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);' // 添加阴影
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        roam: true,  // 开启鼠标缩放和平移
                        draggable: true,
                        edgeSymbol: ['none', 'arrow'], // 设置线条为箭头
                        edgeSymbolSize: 10, // 调整箭头大小
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: function (params) {
                                // 显示节点名称
                                return `${params.data.name}`;
                            },
                            color: '#fff',
                            fontSize: 16, // 调整字体大小
                            //backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: 3,
                            padding: [2, 4]
                        },
                        force: {
                            // 调整节点之间的距离
                            edgeLength: [100, 200], // 边的长度范围
                            repulsion: 300 // 节点之间的斥力
                        },


                        data: [
                            {
                                name: "早疫病",
                                symbolSize: 50, // 调整节点大小
                                detail: "治愈率：50%\n治疗方法：多浇水",
                                itemStyle: {
                                    color: 'red'
                                }
                            },
                            {
                                name: "xxx",
                                symbolSize: 50, // 调整节点大小
                                detail: "治愈率：60%\n治疗方法：少浇水",
                                itemStyle: {
                                    color: 'green'
                                }
                            },
                            {
                                name: "asdfa",
                                symbolSize: 50, // 调整节点大小
                                detail: "治愈率：70%\n治疗方法：多晒太阳",
                                itemStyle: {
                                    color: 'pink'
                                }
                            },
                            {
                                name: "设为",
                                symbolSize: 50, // 调整节点大小
                                detail: "治愈率：80%\n治疗方法：少晒太阳",
                                itemStyle: {
                                    color: 'grey'
                                }
                            },
                            {
                                name: "手法5dfj",
                                symbolSize: 50, // 调整节点大小
                                detail: "治愈率：90%\n治疗方法：适量施肥"
                            },
                            {
                                name: "xbf",
                                symbolSize: 50, // 调整节点大小
                                detail: "治愈率：50%\n治疗方法：适量浇水"
                            },
                            {
                                name: "电视广告",
                                symbolSize: 50, // 调整节点大小
                                detail: "治愈率：60%\n治疗方法：适量通风"
                            }
                        ],
                        links: [
                            {
                                source: 0,
                                target: 1,
                                label: {
                                    show: true,
                                    formatter: '化学控制',
                                    fontSize: 14,
                                    color: '#000'
                                }
                            },
                            {
                                source: 0,
                                target: 2,
                                label: {
                                    show: true,
                                    formatter: '物理控制',
                                    fontSize: 14,
                                    color: '#000'
                                }
                            },
                            {
                                source: 0,
                                target: 3,
                                label: {
                                    show: true,
                                    formatter: '发病位置',
                                    fontSize: 14,
                                    color: '#000'
                                }
                            },
                            {
                                source: 0,
                                target: 4,
                                label: {
                                    show: true,
                                    formatter: '防治措施',
                                    fontSize: 14,
                                    color: '#000'
                                }
                            },
                            {
                                source: 0,
                                target: 5,
                                label: {
                                    show: true,
                                    formatter: '疾病位置',
                                    fontSize: 14,
                                    color: '#000'
                                }
                            },
                            {
                                source: 0,
                                target: 6,
                                label: {
                                    show: true,
                                    formatter: '农业控制',
                                    fontSize: 14,
                                    color: '#000'
                                }
                            }
                        ],
                        categories: []
                    }
                ]
            };

            myChart.setOption(option);

            // 添加点击事件处理程序
            /* myChart.on('click', function (params) {
                if (params.dataType === 'node') {
                    const content = `${params.data.name}\n${params.data.detail}`;
                    alert(content); // 使用 alert 弹窗显示完整内容
                }
            }); */
        });

        return {
            chart
        };
    }
};
</script>

<style scoped></style>