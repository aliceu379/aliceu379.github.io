interface Project {
	name: string
	href: string

	img: string
	alt: string

	description: string
}

export function normalizeProject(project: Partial<Project>): Project {
	return {
		name: project.name ?? "Unnamed Project",
		href: project.href ?? "",

		img: project.img ?? "/img/NoImage.png",
		alt: project.alt ?? (project.name ?? "Unnamed Project"),

		description: project.description ?? "No Description",
	}
}

export const projectInformation: Array<Partial<Project>> = [
	{
		name: "Test",
	},
];
