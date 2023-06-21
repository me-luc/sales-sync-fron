import { ProductSale } from '@/types';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const ProductsContext = createContext({
	products: [] as ProductSale[],
	setProducts: (() => {}) as Dispatch<SetStateAction<ProductSale[]>>,
});

export function ProductsProvider({ children }: { children: React.ReactNode }) {
	const [products, setProducts] = useState([] as ProductSale[]);

	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
			}}>
			{children}
		</ProductsContext.Provider>
	);
}
