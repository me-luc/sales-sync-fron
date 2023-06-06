import styled from 'styled-components';
import { Logo } from '../Logo';

export default function DestopTopBar() {
	return (
		<StyledDesktopTopBar>
			<Logo size={30} className='title-bar' />
			<></>
		</StyledDesktopTopBar>
	);
}

const StyledDesktopTopBar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: var(--bar-height);
	background: var(--primary-background-color);
	filter: drop-shadow(0px 3px 10px rgba(52, 58, 58, 0.169));

	padding: 15px 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title-bar {
		margin: 0;
	}
`;
