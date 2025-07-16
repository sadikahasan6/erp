<script lang="ts">
	let isSidebarOpen = false;
	import Icon from '@iconify/svelte';

</script>

<header class="top-header">
	<div class="component">
		<button on:click={() => (isSidebarOpen = !isSidebarOpen)} style="color: white;">
			<Icon icon="humbleicons:bars" width="24" height="24" />
		</button>
		<div class="brand"><h2>ERP SOLUTION</h2></div>
	</div>
	<div class="component">
		<Icon icon="material-symbols:notifications-unread-outline-rounded" width="24" height="24" />
		<Icon icon="gravity-ui:dots-9" width="24" height="24" />
	</div>
</header>

{#if isSidebarOpen}
	<aside class="sidebar">
		<ul>
			<li><a href="/">Dashboard</a></li>
			<li><a href="/employee-info">Employee Information</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</aside>

{/if}
