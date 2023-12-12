// Default <head> tags we want shared across the app
export function DefaultTags() {
	return (
		<>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/favicons/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicons/favicon-16x16.png'
			/>
			<link rel='manifest' href='/manifest.json' />
			<link
				rel='mask-icon'
				href='/favicons/safari-pinned-tab.svg'
				color='#5bbad5'
			/>
			<meta name='msapplication-TileColor' content='#2d89ef' />
			<meta name='theme-color' content='#ffffff' />
			<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<meta
				content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				name='robots'
			/>
		</>
	)
}
