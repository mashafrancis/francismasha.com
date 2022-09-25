const Loader = (): JSX.Element => (
	<svg id='logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
		<title>Loader Logo</title>
		<g>
			<g id='B' transform='translate(11.000000, 5.000000)'>
				<text
					x='26'
					y='65'
					fill='currentColor'
					fontSize='50px'
					fontFamily='avenir, serif'
				>
					F
				</text>
			</g>
			<path
				stroke='currentColor'
				strokeWidth='5'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M 50, 5
					L 11, 27
					L 11, 72
					L 50, 95
					L 89, 73
					L 89, 28 z'
			/>
		</g>
	</svg>
);

export default Loader;
