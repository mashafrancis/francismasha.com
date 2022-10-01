import { useRouter } from 'next/router';
import { useBeforeunload } from 'react-beforeunload';
import { FormState } from 'react-hook-form';
import { useCallback, useEffect } from 'react';

type Props<T> = {
	formState: FormState<T>;
	message?: string;
};

const defaultMessage = 'Are you sure to leave without saving?';

export function useLeaveConfirm<T>({
	formState,
	message = defaultMessage,
}: Props<T>) {
	const { events } = useRouter();

	const { isDirty } = formState;

	const onRouteChangeStart = useCallback(() => {
		if (isDirty) {
			if (window.confirm(message)) {
				return true;
			}
			throw "Abort route change by user's confirmation.";
		}
	}, [isDirty, message]);

	useEffect(() => {
		events.on('routeChangeStart', onRouteChangeStart);

		return () => {
			events.off('routeChangeStart', onRouteChangeStart);
		};
	}, [events, onRouteChangeStart]);

	useBeforeunload((event) => {
		if (isDirty) {
			event.preventDefault();
		}
	});

	return;
}
