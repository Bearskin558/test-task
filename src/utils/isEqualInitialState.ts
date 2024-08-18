import { FilterPrice } from "../store/filterStore"
import { PizzaCategory, PizzaDough } from "../types/pizza"

export const toCompareWithInitialState = (
	ingredients: string[],
	price: FilterPrice,
	dough: PizzaDough[],
	categories: PizzaCategory[],
) => {
	return ingredients.length === 0 && price === "all" && dough.length === 0 && categories.length === 0
}
