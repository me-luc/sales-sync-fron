import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface RedirectOptionProps {
	href: string;
	label: string;
	type?: string;
	action?: () => void;
}

export function RedirectOption({
	href,
	label,
	type = 'link',
	action,
}: RedirectOptionProps) {
	const router = useRouter();

	function redirect() {
		if (type === 'link') router.push(href);
		if (type === 'function' && action) action();
	}

	return <StyledButton onClick={redirect}>{label}</StyledButton>;
}

const StyledButton = styled.button`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	line-height: 125%;
	letter-spacing: 0.75px;
	text-decoration-line: underline;
	background: none;
	color: var(--primary-text-color);
	margin-top: 33px;
`;
