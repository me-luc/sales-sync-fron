'use client';
import { PageTitle, ProductFileInput, ProductInput } from '@/components';
import styled from 'styled-components';

export default function AddProductPage() {
	return (
		<main>
			<PageTitle backPath='home' title='Add Product' />
			<StyledImageBox>
				<StyledImage
					src='/no-product-image.png'
					alt='Under Construction'
				/>
			</StyledImageBox>

			<ProductFileInput title='Foto do produto' />
			<ProductInput
				title='Nome do produto'
				placeholder='NomeDoProduto'
				type='text'
			/>
			<ProductInput
				title='Descrição do produto (opcional)'
				placeholder='Descrição'
			/>
			<ProductInput
				title='Preço do produto R$'
				placeholder='0,00'
				type='number'
				min='1'
				step='0.10'
				highlight={true}
			/>
			<ProductInput title='Fornecedor (opcional)' />
		</main>
	);
}

const StyledImageBox = styled.div`
	width: 100%;
	height: 360px;
	background: #d9d9d9;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled.img`
	width: 135px;
	height: auto;
`;
