<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	import {normalizeProject, projectInformation} from "$lib/assets/projects";
	import {information} from "$lib/assets/information";

	const normalizedProjectInformation = projectInformation.map((project) => normalizeProject(project))
</script>

<main class="h-full w-full">
	<div class="h-full w-full flex flex-row">
		<!-- Name and Information -->
		<div class="flex-1 prose prose-p:m-0 m-16 w-lg">
			<div class="not-prose">
				<div class="avatar">
					<div class="w-56 rounded-3xl">
						<img src={information.profilePicture} alt="Profile"/>
					</div>
				</div>
			</div>
			<h1 class="mt-8">{information.name}</h1>

			{#each information.links as link }
				{#if link.isURL}
					<p>{link.name}: <a href={link.href}>{link.href}</a></p>
				{:else}
					<p>{link.name}: {link.href}</p>
				{/if}
			{/each}

			<div class="divider"></div>

			<p>{information.description}</p>
		</div>

		<div class="flex-none divider divider-horizontal m-0"></div>

		<!-- Projects -->
		<div class="flex-3 flex flex-col">
			<div class="w-full flex justify-center">
				<h1 class="w-max text-5xl m-4"><strong>My Projects</strong></h1>
			</div>

			<div class="divider"></div>

			<div class="w-full p-4 grid grid-flow-row grid-cols-3 gap-4 overflow-y-scroll">
				{#each normalizedProjectInformation as project }
					<ProjectCard {...project}>
						<p>{project.description}</p>
					</ProjectCard>
				{/each}
			</div>
		</div>
	</div>
</main>
