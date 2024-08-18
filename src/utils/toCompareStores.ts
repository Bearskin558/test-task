import { FilterPrice } from "../store/filterStore"
import { PizzaCategory, PizzaDough } from "../types/pizza"

export const toCompareStores = (
	ingredients: string[],
	ingredientsStore: string[],
	price: FilterPrice,
	priceStore: FilterPrice,
	dough: PizzaDough[],
	doughStore: PizzaDough[],
	categories: PizzaCategory[],
	categoriesStore: PizzaCategory[],
) => {
	const isEqualIngredients =
		ingredients.length === ingredientsStore.length &&
		ingredients.every((item, index) => item === ingredientsStore[index])
	const isEqualDough = dough.length === doughStore.length && dough.every((item, index) => item === doughStore[index])
	const isEqualCategories =
		categories.length === categoriesStore.length && categories.every((item, index) => item === categoriesStore[index])
	const isEqualPrice = price === priceStore
	console.log(isEqualIngredients)
	console.log(ingredients)
	console.log(ingredientsStore)
	return isEqualIngredients && isEqualDough && isEqualCategories && isEqualPrice
}
