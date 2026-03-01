<script lang="ts">
	let {
		name = "Unnamed Project",
		img = "/img/NoImage.png",
		alt = "",
		href = "",
		children,
	} = $props();
</script>

<article class="card bg-base-100 w-96 shadow-sm">
	<figure>
		<img src={img} alt={alt===""?name:alt} />
	</figure>
	<div class="divider m-1"></div>
	<div class="card-body pt-1">
		<h2 class="card-title">{name}</h2>
		<div>
			{@render children()}
		</div>
		{#if href !== ""}
			<a {href} class="btn btn-primary">Open project</a>
		{/if}
	</div>
</article>
