import styled from 'styled-components';
import { ActionButton } from './ActionButton';
import { ButtonType, ProductSale } from '@/types';
import { useAuth, useProduct, useSales } from '@/hook';
import { use, useContext, useState } from 'react';
import { AuthenticationContext } from '@/context';
import { Toast } from '../Toast';
import { ProductOverviewItem } from './ProductOverviewItem';
import { toast } from 'react-toastify';
import { ProductsContext } from '@/context/ProductsContext';

interface ProductOverviewProps {
	setShowOverview: (show: boolean) => void;
}

export function ProductOverview({ setShowOverview }: ProductOverviewProps) {
	const [showInfoMissing, setShowInfoMissing] = useState(false);
	const { user } = useContext(AuthenticationContext);
	const { deleteProduct } = useProduct();
	const { sellManually, getPaymentLink } = useSales(() =>
		setShowOverview(false)
	);
	const { getAccountUpdateLink } = useAuth();
	const { products } = useContext(ProductsContext);

	if (!products.length) return toast.error('Nenhum produto selecionado!');

	return (
		<Toast type='custom' setShow={setShowOverview}>
			<Container className='PRODUCT BOX CONTAINET PRODUCT OVERVIEW'>
				{showInfoMissing && (
					<Toast
						type='warning'
						setShow={setShowInfoMissing}
						buttonType='both'
						message='Configure alguns detalhes para conseguir enviar links de pagamento!'
						continueAction={handleContinue}
					/>
				)}

				<ProductsContainer>
					{products.map((product) => (
						<ProductOverviewItem
							key={product.id}
							id={product.id}
							category={product.category}
							title={product.name}
							price={product.price}
							image={product.photo}
						/>
					))}
				</ProductsContainer>

				<ActionsContainer>
					<ActionButton
						name='Link de pagamento'
						onClick={handlePaymentLink}
						type={ButtonType.highlight}
					/>
					<ActionButton
						name='Vender (manual)'
						onClick={() => sellManually(products)}
					/>
					{products.length === 1 && (
						<>
							<ActionButton name='Editar' onClick={() => {}} />
							<ActionButton
								name='Deletar'
								onClick={handleDelete}
							/>
						</>
					)}
				</ActionsContainer>
			</Container>
		</Toast>
	);

	function handleDelete() {
		deleteProduct(products[0].id);
		setShowOverview(false);
	}

	function handlePaymentLink() {
		if (!user?.stripeCompletedProfile) {
			return setShowInfoMissing(true);
		}
		getPaymentLink(products);
	}

	function handleContinue() {
		getAccountUpdateLink();
		setShowInfoMissing(false);
	}
}

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	max-height: 700px;
	background-color: var(--base-color);

	display: flex;
	flex-flow: column;
	align-items: stretch;

	padding: 25px;

	.product-image-overview {
		width: 145px;
		height: 145px;
		object-fit: cover;
		margin: 0;
		margin-right: 20px;
	}
`;

const ActionsContainer = styled.div`
	width: 100%;
`;

const ProductsContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex: 1 1 auto;
`;
