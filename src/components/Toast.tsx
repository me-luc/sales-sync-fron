import { ToastWarningIcon } from '@/icons';
import styled from 'styled-components';
import { ActionButton } from './product/ActionButton';
import { ButtonType } from '@/types';
import { useRouter } from 'next/navigation';

interface ToastProps {
	message?: string;
	type: 'success' | 'error' | 'warning' | 'info' | 'custom';
	children?: React.ReactNode;
	setShow: (show: boolean) => void;
	buttonType?: 'continue' | 'back' | 'both';
	continueAction?: () => void;
	backHref?: string;
}

export function Toast({
	message,
	type = 'custom',
	children,
	setShow,
	buttonType = 'continue',
	continueAction,
	backHref,
}: ToastProps) {
	const router = useRouter();

	if (type === 'custom')
		return (
			<BlurrBackground onClick={handleClick}>{children}</BlurrBackground>
		);

	return (
		<BlurrBackground onClick={handleClick}>
			<Background>
				<ToastWarningIcon type='warning' />
				<Message>{message}</Message>

				{buttonType === 'continue' && (
					<ActionButton
						type={ButtonType.highlight}
						name='Continuar'
						onClick={handleContinue}
					/>
				)}
				{buttonType === 'back' && (
					<ActionButton name='Voltar' onClick={handleBack} />
				)}
				{buttonType === 'both' && (
					<>
						<ActionButton
							type={ButtonType.highlight}
							name='Continuar'
							onClick={handleContinue}
						/>
						<ActionButton name='Voltar' onClick={handleBack} />
					</>
				)}
			</Background>
		</BlurrBackground>
	);

	function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		event.stopPropagation();
		if (event.target !== event.currentTarget) return;
		setShow(false);
	}

	function handleContinue() {
		if (continueAction) continueAction();
		setShow(false);
	}

	function handleBack() {
		if (backHref) router.push(backHref);
		setShow(false);
	}
}

const BlurrBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(14, 14, 14, 0.7);
	backdrop-filter: blur(5px);
	z-index: 1;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: auto;
	background-color: var(--base-color);

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 50px 25px;
`;

const Message = styled.span`
	font-weight: 500;
	font-size: 26px;
	line-height: 125%;
	text-align: center;
	letter-spacing: 0.75px;
	margin: 20px 0;
`;
