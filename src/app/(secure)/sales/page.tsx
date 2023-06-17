'use client';
import { SaleOverview } from '@/components';
import { useSales } from '@/hook';
import styled from 'styled-components';

export default function Home() {
	const { sales } = useSales();

	return (
		<>
			{sales.map((sale, index) => {
				return (
					<>
						<StyledDate key={index}>{sale.date}</StyledDate>
						<SaleOverview
							paymentMethod={sale.paymentMethod}
							products={sale.saleProducts}
							totalPrice={sale.totalPrice}
						/>
					</>
				);
			})}
		</>
	);
}

const StyledDate = styled.h4`
	font-weight: 700;
	font-size: 16px;
	line-height: 125%;
	letter-spacing: 0.75px;
	text-transform: capitalize;
	text-align: left;

	margin-top: 30px;
	margin-bottom: 20px;

	color: var(--secondary-text-color);
`;
