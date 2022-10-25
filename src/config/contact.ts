export enum ContactType {
	code = 'code',
	github = 'github',
	linkedin = 'linkedin',
	twitter = 'twitter',
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
	twitter: '@MashaFrancis',
	site: 'francismasha.com',
	calendly: 'https://calendly.com/francismasha96',
	links: {
		code: 'https://code.francismasha.com',
		github: 'https://github.com/mashafrancis',
		linkedin: 'https://linkedin.com/in/francis-masha',
		twitter: 'https://twitter.com/MashaFrancis',
		email: 'mailto:contact@francismasha.com',
		buymeacoffee: 'https://www.buymeacoffee.com/francismasha',
	},
};
