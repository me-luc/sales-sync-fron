export interface IconProps extends React.SVGProps<SVGSVGElement> {
	className: string;
	size?: number;
}

export interface ToastIconProps extends React.SVGProps<SVGSVGElement> {
	type: 'success' | 'error' | 'warning' | 'info';
}
