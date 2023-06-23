import styled from 'styled-components';
import {
	EmailShareButton,
	FacebookShareButton,
	InstapaperShareButton,
	LinkedinShareButton,
	RedditShareButton,
	TelegramShareButton,
	TumblrShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailIcon,
	FacebookIcon,
	InstapaperIcon,
	LinkedinIcon,
	RedditIcon,
	TelegramIcon,
	TumblrIcon,
	TwitterIcon,
	WhatsappIcon,
} from 'react-share';
import { Toast, ToastMessage } from '../Toast';
import { ActionButton } from './ActionButton';
import { ToastSuccessIcon } from '@/icons';
import { ButtonType } from '@/types';

interface LinkHandlerProps {
	setShow: (show: boolean) => void;
	link: string;
}

export function LinkHandler({ setShow, link }: LinkHandlerProps) {
	if (!link) return null;

	return (
		<Toast type='custom' setShow={setShow}>
			<Container>
				<ToastSuccessIcon />
				<ToastMessage>Link gerado com sucesso</ToastMessage>
				<MediaShareContainer url={link} />
				<ActionButton
					name='Copiar link'
					type={ButtonType.highlight}
					onClick={copyToClipboard}
				/>
				<ActionButton name='Voltar' onClick={() => setShow(false)} />
			</Container>
		</Toast>
	);

	function copyToClipboard() {
		navigator.clipboard.writeText(link);
	}
}

function MediaShareContainer({ url }: { url: string }) {
	return (
		<ShareContainer>
			<WhatsappShareButton url={url}>
				<WhatsappIcon round size={45} />
			</WhatsappShareButton>
			<FacebookShareButton url={url}>
				<FacebookIcon round size={45} />
			</FacebookShareButton>
			<TwitterShareButton url={url}>
				<TwitterIcon round size={45} />
			</TwitterShareButton>
			<LinkedinShareButton url={url}>
				<LinkedinIcon round size={45} />
			</LinkedinShareButton>
			<RedditShareButton url={url}>
				<RedditIcon round size={45} />
			</RedditShareButton>
			<TelegramShareButton url={url}>
				<TelegramIcon round size={45} />
			</TelegramShareButton>
			<EmailShareButton url={url}>
				<EmailIcon round size={45} />
			</EmailShareButton>
			<InstapaperShareButton url={url}>
				<InstapaperIcon round size={45} />
			</InstapaperShareButton>
		</ShareContainer>
	);
}

const Container = styled.div`
	width: 100%;
	height: fit-content;
	max-height: 700px;
	padding: 25px;
	background-color: var(--base-color);

	display: flex;
	flex-flow: column;
	align-items: center;
`;

const ShareContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 20px;
`;
