import { ArrowBackIcon } from '@/icons';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface PageTitleProps {
	title: string;
	backPath: string;
}

export function PageTitle({ title, backPath }: PageTitleProps) {
	const router = useRouter();

	return (
		<StyledContainer>
			<button onClick={handleClick}>
				<ArrowBackIcon className='clickable icon' />
			</button>
			<StyledPageTitle>{title}</StyledPageTitle>
			<span className='invisible'></span>
		</StyledContainer>
	);

	function handleClick() {
		router.push(backPath);
	}
}
const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	background: var(--primary-background-color);

	button {
		background: none;
	}
`;

const StyledPageTitle = styled.h4`
	color: var(--primary-text-color);
	cursor: pointer;
`;
