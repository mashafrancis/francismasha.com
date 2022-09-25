export enum ContactType {
	github = 'github',
	linkedin = 'linkedin',
	twitter = 'twitter',
	youtube = 'youtube',
	email = 'email',
	buymeacoffee = 'buymeacoffee',
}

export interface Contact {
	twitter: string;
	site: string;
	calendly?: string;
	links: Record<ContactType, string>;
}

export const contact: Contact = {
	twitter: '@karan_6864',
	site: 'francismasha.com',
	calendly: 'https://calendly.com/francismasha',
	links: {
		github: 'https://github.com/mashafrancis',
		linkedin: 'https://linkedin.com/in/francis-masha',
		twitter: 'https://twitter.com/mashafrancis',
		youtube: 'https://www.youtube.com/c/mashafrancis',
		email: 'mailto:contact@francismasha.com',
		buymeacoffee: 'https://www.buymeacoffee.com/mashafrancis',
	},
};
