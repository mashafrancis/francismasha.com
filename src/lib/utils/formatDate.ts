import siteMetadata from '../../../data/siteMetadata';

const formatDate = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return new Date(date).toLocaleDateString(siteMetadata.locale, options);
};

const formatDateDay = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
	};

	return new Date(date).toLocaleDateString(siteMetadata.locale, options);
};

const formatDateMonthYear = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		year: '2-digit',
		month: 'short',
	};

	return new Date(date).toLocaleDateString(siteMetadata.locale, options);
};

export { formatDate, formatDateDay, formatDateMonthYear };
