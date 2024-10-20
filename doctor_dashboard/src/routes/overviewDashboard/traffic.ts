import type { ApexOptions } from 'apexcharts';

interface TrafficChannelsChartColors {
  strokeColor: string;
}

const getTrafficChannelsChartConfig = (dark: boolean): ApexOptions => {
  let trafficChannelsChartColors: TrafficChannelsChartColors = { strokeColor: '#ffffff' };

  if (dark) {
    trafficChannelsChartColors = {
      strokeColor: '#1f2937'
    };
  } else {
    trafficChannelsChartColors = {
      strokeColor: '#ffffff'
    };
  }

  return {
    series: [20, 40, 30],
    labels: ['High Risk', 'Middle Risk', 'Low Risk'],
    colors: ['#FF5F57', '#FDBC2C', '#28C840'],
    chart: {
      type: 'donut',
      height: 400,
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false
      }
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            height: 300
          }
        }
      }
    ],
    stroke: {
      colors: [trafficChannelsChartColors.strokeColor]
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.9
        }
      }
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif'
      },
      x: {
        show: true,
        formatter: function (_: any, { seriesIndex, w }: { seriesIndex: number; w: any }) {
          const label = w.config.labels[seriesIndex];
          return label;
        }
      },
      y: {
        formatter: function (value: number) {
          return value + '%';
        }
      }
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
};

export default getTrafficChannelsChartConfig;