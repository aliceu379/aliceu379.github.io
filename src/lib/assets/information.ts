interface LinkInfo {
	name: string
	href: string
	isURL?: boolean
}

interface Information {
	name: string
	profilePicture: string
	links: Array<LinkInfo>
	description: string
}

export const information: Information = {
	name: "AliceU",
	profilePicture: "/img/Profile.png",
	links: [
		{
			name: "Email",
			href: "rothcu621@protonmail.com",
		},
		{
			name: "Github",
			href: "https://github.com/aliceu379",
			isURL: true,
		},
		{
			name: "Codeberg",
			href: "https://codeberg.org/RothCu",
			isURL: true,
		},
	],
	description: "",
};
