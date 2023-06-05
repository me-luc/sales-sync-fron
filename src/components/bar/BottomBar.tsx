import { AddIcon, HomeIcon, SearchIcon, UserIcon, FavoriteIcon } from '@/icons';
import styled from 'styled-components';

export default function BottomBar() {
	return (
		<StyledBottomBar>
			<HomeIcon className='icon clickable' />
			<SearchIcon className='icon clickable' />
			<AddIcon className='icon clickable' />
			<FavoriteIcon className='icon clickable' />
			<UserIcon className='icon clickable' />
		</StyledBottomBar>
	);
}

const StyledBottomBar = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100px;
	filter: drop-shadow(0px 3px 10px rgba(52, 58, 58, 0.169));

	padding: 30px 45px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background: var(--primary-background-color);
`;
