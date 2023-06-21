import { ToastIconProps } from '@/types';

export function ToastWarningIcon({ type }: ToastIconProps) {
	const color = getColor(type);
	return (
		<svg
			width='65'
			height='65'
			viewBox='0 0 65 65'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M32.5001 5.41699C17.5501 5.41699 5.41675 17.5503 5.41675 32.5003C5.41675 47.4503 17.5501 59.5837 32.5001 59.5837C47.4501 59.5837 59.5834 47.4503 59.5834 32.5003C59.5834 17.5503 47.4501 5.41699 32.5001 5.41699ZM32.5001 35.2087C31.0105 35.2087 29.7917 33.9899 29.7917 32.5003V21.667C29.7917 20.1774 31.0105 18.9587 32.5001 18.9587C33.9897 18.9587 35.2084 20.1774 35.2084 21.667V32.5003C35.2084 33.9899 33.9897 35.2087 32.5001 35.2087ZM35.2084 46.042H29.7917V40.6253H35.2084V46.042Z'
				fill={color}
			/>
		</svg>
	);
}

function getColor(type: string) {
	switch (type) {
		case 'success':
			return 'var(--success-color)';
		case 'error':
			return 'var(--error-color)';
		case 'warning':
			return 'var(--warning-color)';
		case 'info':
			return 'var(--info-color)';
		default:
			return 'var(--info-color)';
	}
}
