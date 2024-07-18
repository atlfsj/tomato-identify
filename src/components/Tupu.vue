<template>
    <div id="graph" style="width: 100%; height: 800px;"></div>
</template>

<script>
import * as echarts from 'echarts';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const nodeJsonUrl = route.query.nodeJsonUrl;
        const linksJsonUrl = route.query.linksJsonUrl;

        const fetchData = async () => {
            try {
                console.log('Fetching data from URLs:', nodeJsonUrl, linksJsonUrl);
                const responses = await Promise.all([
                    fetch(nodeJsonUrl),
                    fetch(linksJsonUrl)
                ]);

                const results = await Promise.all(responses.map(response => response.json()));

                const mydata = results[0];
                const links = results[1];

                const myChart = echarts.init(document.getElementById('graph'));

                const option = {
                    tooltip: {
                        formatter: a => {
                            return `${a.data.detail}`;
                        },
                        position: function (point, params, dom, rect, size) {
                            let x = point[0];
                            let y = point[1];
                            let viewWidth = size.viewSize[0];
                            let viewHeight = size.viewSize[1];
                            let boxWidth = size.contentSize[0];
                            let boxHeight = size.contentSize[1];

                            if (x + boxWidth > viewWidth) {
                                x -= boxWidth;
                            }
                            if (y + boxHeight > viewHeight) {
                                y -= boxHeight;
                            }
                            return [x, y];
                        }
                    },
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    legend: {
                        x: "center",
                        show: true
                    },
                    series: [
                        {
                            type: 'graph',
                            layout: 'force',
                            symbolSize: 65,
                            focusNodeAdjacency: true,
                            draggable: true,
                            roam: true,
                            categories: [
                                {
                                    name: '疾病症状',
                                    itemStyle: {
                                        color: "lightgreen"
                                    }
                                },
                                {
                                    name: '化学控制',
                                    itemStyle: {
                                        color: "orange",
                                    }
                                },
                                {
                                    name: '物理控制',
                                    itemStyle: {
                                        color: "pink",
                                    }
                                },
                                {
                                    name: '疾病位置',
                                    itemStyle: {
                                        color: "lightblue",
                                    }
                                },
                                {
                                    name: '农业控制',
                                    itemStyle: {
                                        color: "grey",
                                    }
                                }
                            ],

                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 12,
                                    color: "black",
                                }
                            },
                            force: {
                                repulsion: 2000,
                                edgeLength: [10, 50],
                                gravity: 0.1,
                            },
                            edgeSymbolSize: [4, 8],
                            edgeSymbol: ['none', 'arrow'],
                            edgeLabel: {
                                show: true,
                                textStyle: {
                                    fontSize: 10
                                },
                                formatter: "{c}"
                            },
                            data: mydata,
                            links: links,
                            lineStyle: {
                                opacity: 0.9,
                                width: 1.1,
                                curveness: 0,
                                color: "#262626",
                            }
                        }
                    ]
                };

                myChart.setOption(option);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return {};
    }
};
</script>

<style scoped>
#graph {
    width: 100%;
    height: 100%;
}
</style>
