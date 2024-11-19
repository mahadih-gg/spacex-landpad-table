<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import { Chart } from 'flowbite-svelte';
	import { getSuccessRate } from 'src/lib';
	import { landingPadsStore } from 'src/lib/store/landingPads.store.svelte';
	import type { LandPadItemType } from 'src/lib/types';

	// Access the landingPadsData store
	let { ladingPadsData } = landingPadsStore;

	// Define chart options and update them reactively
	let options: ApexOptions = {};

	// Reactive update whenever ladingPadsData changes
	$: {
		const seriesData = $ladingPadsData.map((pad: LandPadItemType) => {
			return getSuccessRate(pad.landing_successes, pad.landing_attempts);
		});

		const labelsData = $ladingPadsData.map((pad: LandPadItemType) => pad.name);

		options = {
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
								offsetY: 20
							},
							total: {
								showAlways: true,
								show: true,
								label: 'Landing Pads',
								fontFamily: 'Inter, sans-serif',
								formatter: function () {
									return `${$ladingPadsData.length}`;
								}
							},
							value: {
								show: true,
								fontFamily: 'Inter, sans-serif',
								offsetY: -20,
								formatter: (value: string) => {
									return value + '%';
								}
							}
						},
						size: '80%'
					}
				}
			},
			grid: {
				padding: {
					top: -2
				}
			},
			labels: labelsData,
			dataLabels: {
				enabled: false
			},
			legend: {
				position: 'bottom' as const,
				fontFamily: 'Inter, sans-serif'
			},
			yaxis: {
				labels: {
					formatter: (val: number) => {
						return val + '%';
					}
				}
			},
			xaxis: {
				labels: {
					formatter: (val: string) => {
						return val + '%';
					}
				},
				axisTicks: {
					show: false
				},
				axisBorder: {
					show: false
				}
			}
		};
	}
</script>

<div class="card">
	<h5 class="card-heading">Success Rate Chart</h5>
	<!-- Chart container -->
	<div class="w-full p-4 min-h-40">
		<Chart {options} />
	</div>
</div>
