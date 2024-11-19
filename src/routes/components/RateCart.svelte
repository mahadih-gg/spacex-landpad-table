<script lang="ts">
  import type { ApexOptions } from 'apexcharts';
  import { Chart } from 'flowbite-svelte';
  import type { LandPadItemType } from 'src/lib/types';

  let { ladingPadsData }: any = $props();

  // Calculate success rates for each landing pad
  const seriesData = ladingPadsData.map((pad:LandPadItemType) => {
    const successRate = (pad.landing_successes / pad.landing_attempts) * 100;
    return Number(successRate.toFixed(1)); // Format to 1 decimal place
  });

  // Create dynamic labels for each landing pad
  const labelsData = ladingPadsData.map((pad:LandPadItemType) => pad.name);

  const options: ApexOptions = {
    series: seriesData,
    colors: ['#1C64F2', '#16BDCA', '#FDBA8C', '#E74694'],
    chart: {
      height: 320,
      width: '100%',
      type: 'donut'
    },
    stroke: {
      colors: ['transparent'],
      lineCap: 'butt'
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Landing Pads',
              fontFamily: 'Inter, sans-serif',
              formatter: function () {
                return `${ladingPadsData?.length}`;
              },
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
              formatter: (value: string) => {
                return value + '%';
              },
            },
          },
          size: '80%',
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: labelsData,
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom' as const,
      fontFamily: 'Inter, sans-serif',
    },
    yaxis: {
      labels: {
        formatter: (val: number) => {
          return val + '%';
        },
      },
    },
    xaxis: {
      labels: {
        formatter: (val: string) => {
          return val + '%';
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
</script>

<div class="card">
  <h5 class="card-heading">Success Rate Chart</h5>
  <!-- chart container -->
  <div class="w-full p-4">
      <Chart {options} />
  </div>
</div>
