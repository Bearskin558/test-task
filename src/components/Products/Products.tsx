import { shallow } from "zustand/shallow"
import { useFilterStore } from "../../store/filterStore"
import { usePizzaStore } from "../../store/pizzasStore"
import { toFilterPizzas } from "../../utils/toFilterPizzas"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./Products.module.scss"

const Products = () => {
	const pizzas = usePizzaStore(state => state.pizzas)
	const [categories, dough, price, ingredients] = useFilterStore(
		state => [state.categories, state.dough, state.price, state.ingredients],
		shallow,
	)
	const filteredPizzas = toFilterPizzas(pizzas, dough, ingredients, price, categories)
	return (
		<div className={styles.wrapper}>
			{filteredPizzas.map(pizzas => (
				<ProductCard
					{...pizzas}
					key={pizzas.name}
				/>
			))}
		</div>
	)
}

export default Products
