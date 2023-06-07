'use client';
import { PageTitle, ProductFileInput, ProductInput } from '@/components';
import { useProduct } from '@/hook';

import { Lato } from 'next/font/google';
import { useState } from 'react';
import styled from 'styled-components';

const lato = Lato({ subsets: ['latin'], weight: '700' });

export default function AddProductPage() {
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(0);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [supplier, setSupplier] = useState('');
	const { postProduct } = useProduct();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const product = {
			name,
			description,
			price,
			supplier,
			quantity,
		};

		postProduct(product);
	}

	return (
		<main>
			<PageTitle backPath='home' title='Add Product' />
			<StyledImageBox>
				<StyledImage
					src='/no-product-image.png'
					alt='Under Construction'
				/>
			</StyledImageBox>

			<form onSubmit={handleSubmit}>
				<ProductFileInput title='Foto do produto' />
				<ProductInput
					title='Nome do produto'
					placeholder='NomeDoProduto'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<ProductInput
					title='Descrição do produto (opcional)'
					placeholder='Descrição'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<ProductInput
					title='Preço do produto R$'
					placeholder='0,00'
					type='number'
					min='1'
					step='0.10'
					highlight={true}
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
				<ProductInput
					title='Fornecedor (opcional)'
					value={supplier}
					onChange={(e) => setSupplier(e.target.value)}
				/>

				<EndOperationBox>
					<QuantityInput
						className={lato.className}
						placeholder='1'
						type='number'
						min={1}
						step={1}
						value={quantity}
						onChange={(e) => setQuantity(Number(e.target.value))}
					/>
					<StyledButton type='submit'>Adicionar</StyledButton>
				</EndOperationBox>
			</form>
		</main>
	);
}

const StyledImageBox = styled.div`
	width: 100%;
	height: 360px;
	background: var(--image-background-color);

	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled.img`
	width: 135px;
	height: auto;
`;

const QuantityInput = styled.input`
	width: 30%;
	height: 60px;
	background-color: var(--base-color);
	text-align: center;

	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 125%;
	letter-spacing: 0.75px;
	padding: 0 10px;
`;

const StyledButton = styled.button`
	width: 100%;
	height: 100%;
	background-color: var(--continue-button-color);
	border-radius: 0;
`;

const EndOperationBox = styled.div`
	width: 100%;
	height: 60px;

	display: flex;
	align-items: center;
`;
