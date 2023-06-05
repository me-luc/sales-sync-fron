import { useMediaQuery } from 'react-responsive';
import BottomBar from './BottomBar';
import DestopTopBar from './DesktopTopBar';
import MobileTopBar from './MobileTopBar';

export function ResponsiveBars() {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	return (
		<>
			{(isMobile || isTablet) && (
				<>
					<MobileTopBar />
					<BottomBar />
				</>
			)}
			{isDesktop && <DestopTopBar />}
		</>
	);
}
