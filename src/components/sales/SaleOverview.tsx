import { ArrowFillIcon } from '@/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { SaleProductInfo } from './SaleInfo';
import { ProductSaleResponse } from '@/types';

interface SaleOverviewProps {
	paymentMethod: string;
	totalPrice: number;
	products: ProductSaleResponse[];
}

export function SaleOverview({
	paymentMethod,
	totalPrice,
	products,
}: SaleOverviewProps) {
	const [dropDown, setDropDown] = useState(false);

	return (
		<StyledBox>
			<InfoBox>
				<Title>{paymentMethod}</Title>
				<InfoBoxLeft>
					<Price>R$ {totalPrice}</Price>

					<StyledButton onClick={() => setDropDown(!dropDown)}>
						<ArrowFillIcon
							className={'icon' + (dropDown && ' rotate')}
						/>
					</StyledButton>
				</InfoBoxLeft>
			</InfoBox>
			{dropDown &&
				products.map((product: ProductSaleResponse) => (
					<>
						<Line />
						<SaleProductInfo
							key={product.id}
							image={product.photo}
							name={product.name}
							quantity={product.quantity}
							price={product.price}
						/>
					</>
				))}
		</StyledBox>
	);
}

const StyledBox = styled.div`
	width: 100vw;
	height: auto;
	background-color: var(--base-color);
	padding: 25px 35px;

	margin: 0 calc(-1 * var(--body-padding-vertical));
`;

const StyledButton = styled.button`
	background: none;
	border: none;
`;

const InfoBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const InfoBoxLeft = styled.div`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
`;

const Title = styled.h2`
	font-weight: 700;
	font-size: 16px;
	letter-spacing: 0.75px;
	text-transform: uppercase;

	color: var(--primary-text-color);
`;

const Price = styled.span`
	font-weight: 700;
	font-size: 16px;
	text-align: center;
	letter-spacing: 0.75px;
	text-transform: uppercase;

	margin-right: 20px;

	color: var(--accent-color);
`;

const Line = styled.hr`
	height: 0.5px;
	width: 100vw;
	background: var(--line-division-color);
	margin: 20px -35px;
`;
