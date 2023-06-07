import { ArrowBackIcon } from '@/icons';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface PageTitleProps {
	title: string;
	backPath: string;
}

export function PageTitle({ title, backPath }: PageTitleProps) {
	const router = useRouter();

	function goBack() {
		router.push(backPath);
	}

	return (
		<StyledContainer>
			<ArrowBackIcon className='clickable icon' />
			<StyledPageTitle onClick={goBack}>{title}</StyledPageTitle>
			<span className='invisible'></span>
		</StyledContainer>
	);
}
const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	background: var(--primary-background-color);
`;

const StyledPageTitle = styled.h4``;
