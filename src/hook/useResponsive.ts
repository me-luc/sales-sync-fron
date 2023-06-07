'use client';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useResponsive() {
	const [useMobile, setUseMobile] = useState(true);
	const [useTablet, setUseTablet] = useState(false);
	const [useDesktop, setUseDesktop] = useState(false);

	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	useEffect(() => {
		setUseMobile(isMobile);
		setUseTablet(isTablet);
		setUseDesktop(isDesktop);
	}, [isMobile, isTablet, isDesktop]);

	return {
		useMobile,
		useTablet,
		useDesktop,
	};
}
