import styled from 'styled-components';

export function Logo() {
	return <StyledTitle>SalesSync</StyledTitle>;
}

const StyledTitle = styled.h1`
	font-weight: 700;
	font-size: 40px;
	line-height: 49px;
	color: var(--title-text-color);
	margin-bottom: 50px;
`;
