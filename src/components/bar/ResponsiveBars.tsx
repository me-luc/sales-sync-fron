import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileTopBar from './MobileTopBar';
import BottomBar from './BottomBar';
import DestopTopBar from './DesktopTopBar';
import { useResponsive } from '@/hook/useResponsive';

export function ResponsiveBars() {
	const { useMobile, useDesktop, useTablet } = useResponsive();

	return (
		<>
			{(useMobile || useTablet) && (
				<>
					<MobileTopBar />
					<BottomBar />
				</>
			)}
			{useDesktop && <DestopTopBar />}
		</>
	);
}
