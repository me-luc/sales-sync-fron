import styled from 'styled-components';
import { Logo } from '../Logo';

export default function MobileTopBar() {
	return (
		<StyledMobileTopBar>
			<Logo size={30} className='title-bar' />
		</StyledMobileTopBar>
	);
}

const StyledMobileTopBar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: auto;
	filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.071));

	padding: 15px 45px;
	display: flex;
	justify-content: center;
	align-items: center;

	.title-bar {
		margin: 0;
	}
`;
