<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	import {normalizeProject, projectInformation} from "$lib/assets/projects";
	import {information} from "$lib/assets/information";

	const normalizedProjectInformation = projectInformation.map((project) => normalizeProject(project))
</script>

<main class="h-full w-full">
	<div class="h-full w-full flex flex-col lg:flex-row">
		<!-- Name and Information -->
		<div class="m-2 lg:m-16 flex flex-row items-center lg:flex-col lg:items-normal">
			<div class="flex flex-col items-center">
				<div class="avatar">
					<div class="w-24 m-4 lg:w-56 lg:m-0 rounded-3xl">
						<img src={information.profilePicture} alt="Profile"/>
					</div>
				</div>
				<h1 class="text-3xl font-bold w-min">{information.name}</h1>
			</div>
			<div class="h-min overflow-x-scroll">
				{#each information.links as link }
					<p class="text-xs lg:text-lg">{link.name}:
					{#if link.isURL}
						<a class="link" href={link.href}>{link.href}</a>
					{:else}
						{link.href}
					{/if}
					</p>
				{/each}
			</div>
		</div>

		<div class="flex-none divider divider-vertical lg:divider-horizontal m-0"></div>

		<!-- Projects -->
		<div class="grow h-screen flex-none lg:h-auto flex flex-col overflow-y-scroll bg-base-300">
			<div class="w-full flex flex-row justify-center">
				<h1 class="w-max text-3xl lg:text-5xl font-bold m-4">My Projects</h1>
			</div>

			<div class="divider mt-0"></div>

			<div class="overflow-y-scroll">
				<div class="p-4 justify-items-center grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{#each normalizedProjectInformation as project }
						<ProjectCard {...project}>
							<p>{project.description}</p>
						</ProjectCard>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
