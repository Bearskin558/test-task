import { FilterPrice } from "../store/filterStore"
import { Pizza, PizzaCategory, PizzaDough } from "../types/pizza"

export const toFilterPizzas = (
	pizzas: Pizza[],
	doughs: PizzaDough[],
	ingredients: string[],
	price: FilterPrice,
	categories: PizzaCategory[],
) => {
	return pizzas
		.filter(pizza => doughs.every(item => pizza.dough.includes(item)))
		.filter(pizza => ingredients.every(item => pizza.ingredients.includes(item)))
		.filter(pizza => {
			if (price === "all") return true
			if (price === "over 500") return pizza.sizes[0].price > 500
			return pizza.sizes[0].price <= 500
		})
		.filter(pizza => categories.every(category => pizza.categories.includes(category)))
}
