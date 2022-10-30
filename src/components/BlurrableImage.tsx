import clsx from 'clsx';
import type { HTMLAttributes, ImgHTMLAttributes, ReactElement } from 'react';
import {
	cloneElement,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

const useSSRLayoutEffect =
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	typeof window === 'undefined' ? () => {} : useLayoutEffect;

const BlurrableImage = ({
	img,
	blurDataUrl,
	...rest
}: {
	img: JSX.Element & ReactElement<ImgHTMLAttributes<HTMLImageElement>>;
	blurDataUrl?: string;
} & HTMLAttributes<HTMLDivElement>) => {
	const [visible, setVisible] = useState(false);
	const jsImgElRef = useRef<HTMLImageElement>(null);

	// make this happen asap
	// if it's already loaded, don't bother fading it in.
	useSSRLayoutEffect(() => {
		if (jsImgElRef.current?.complete) setVisible(true);
	}, []);

	useEffect(() => {
		if (!jsImgElRef.current) return;
		if (jsImgElRef.current.complete) return;

		let current = true;
		jsImgElRef.current.addEventListener('load', () => {
			if (!jsImgElRef.current || !current) return;
			setTimeout(() => {
				setVisible(true);
			}, 0);
		});

		return () => {
			current = false;
		};
	}, []);

	const jsImgEl = cloneElement(img, {
		ref: jsImgElRef,
		className: clsx(img.props.className, 'transition-opacity', {
			'opacity-0': !visible,
		}),
	});

	return (
		<div {...rest}>
			{blurDataUrl ? (
				<>
					<img
						key={blurDataUrl}
						src={blurDataUrl}
						className={img.props.className}
						alt={img.props.alt}
					/>
					<div className={clsx(img.props.className, 'backdrop-blur-xl')} />
				</>
			) : null}
			{jsImgEl}
			<noscript>{img}</noscript>
		</div>
	);
};

export { BlurrableImage };
