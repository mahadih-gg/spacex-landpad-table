<script lang="ts">
  import { onMount } from 'svelte';

  // Declare map variable and container to bind the DOM element
  let map: L.Map;
  let container: HTMLElement | null = null;
  let { ladingPadsData }: any = $props();


  const markerLocations: { full_name: string, latitude: number, longitude: number, status: string }[] = ladingPadsData.map((pad) => {
    return { full_name: pad.full_name, latitude: pad.latitude, longitude: pad.longitude, status: pad.status };
  });


  onMount(async () => {

		// Dynamically import leaflet to avoid SSR issues
		const L = (await import('leaflet')).default;
    await import('leaflet/dist/leaflet.css');

    // Create map instance after Leaflet is loaded
    map = L.map(container, { preferCanvas: true });

		L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
    &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(map);


    // Remove zoom control (the "+" and "-" buttons)
    map.zoomControl.remove();

    // Remove attribution control (the copyright info in the bottom corner)
    map.attributionControl.remove();

    // Add markers to the map
    addMarkers(map, markerLocations);

    // Fit the map bounds to include all markers
    if (markerLocations.length > 0) {
      const bounds = L.latLngBounds(markerLocations.map(({ latitude, longitude }) => [latitude, longitude]));
      map.fitBounds(bounds);
    }
  });

  /* ================ Adds markers to the map based on the latitude, longitude, and status. ================ */
  function addMarkers(map: any, locations: { full_name: string, latitude: number, longitude: number, status: string }[]) {
		// @ts-ignore
    const markerGroup = L.layerGroup();

    locations.forEach(({ full_name, latitude, longitude, status }) => {
		// @ts-ignore
      const marker = L.marker([latitude, longitude], {
        icon: createCustomMarker(status), // Pass status to determine color
      });
      marker.bindPopup(`Zone: ${full_name}, Status: ${status}`);

      marker.addTo(markerGroup);
    });

    markerGroup.addTo(map);
  }

  /* =========== Creates a custom marker and status based coloring =========== */
  function createCustomMarker(status: string) {
    let markerColor;

    if (status === 'active') {
      markerColor = 'bg-green-400'; 
    } else if (status === 'inactive') {
      markerColor = 'bg-red-400'; 
    } else {
      markerColor = 'bg-blue-400';
    }

    const html = `
      <div class="relative size-3 flex-center">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full ${markerColor} opacity-75"></span>
        <span class="relative inline-flex rounded-full size-3 ${markerColor}"></span>
      </div>
    `;

		// @ts-ignore
    return L.divIcon({
      html: html,
      className: '',
    });
  }
</script>

<div class="card">
  <h5 class="card-heading">Map View</h5>
	<!-- map container -->
  <div bind:this={container} class="w-full p-4 h-80"></div>
</div>

