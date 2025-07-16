<script lang="ts">
	import { isSidebarOpen } from "$lib/stores/sidebarStore";


</script>

{#if $isSidebarOpen}
	<aside style="position: fixed; top: 0; left: 0; height: 100vh; width: 250px; background-color: #333; color: white; z-index: 999;">
		<h3 style="padding: 1rem;">Sidebar</h3>
		<!-- Add your sidebar items here -->
	</aside>
{/if}
