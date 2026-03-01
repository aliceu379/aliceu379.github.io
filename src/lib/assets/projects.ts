interface Project {
	name: string
	href: string

	img: string
	alt: string

	description: string
}

function linkImage(imgName: string): string {
	return "/img/projects/".concat(imgName)
}

function linkCodeberg(repoName: string): string {
	return "https://codeberg.org/RothCu/".concat(repoName)
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
		name: "16 Bit Computer",
		description: "A simple 16 bit computer made in Logisim Evolution, capable of doing arithmetics and conditionals",
		href: linkCodeberg("16bit-computer"),
		img: linkImage("16bit_computer.png"),
		alt: "A circuit of the 16 bit computer",
	},
];
