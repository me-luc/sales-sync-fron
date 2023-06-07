import styled from 'styled-components';

interface LogoProps extends React.HTMLAttributes<HTMLHeadingElement> {
	size?: number;
}

export function Logo({ size = 40, ...props }: LogoProps) {
	return (
		<StyledTitle size={size} {...props}>
			SalesSync
		</StyledTitle>
	);
}

interface StyledTitleProps {
	size: number;
}

const StyledTitle = styled.h1<StyledTitleProps>`
	font-weight: 700;
	font-size: ${({ size }) => (size ? size : '40')}px;
	line-height: 49px;
	color: var(--title-text-color);
	margin-bottom: 50px;
	margin-top: 20px;
`;
