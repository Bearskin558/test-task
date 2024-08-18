import { create } from "zustand"
import { PizzaCategory, PizzaDough } from "../types/pizza"

interface FilterStore {
	categories: PizzaCategory[]
	dough: PizzaDough[]
	price: FilterPrice
	ingredients: string[]
	setCategory: (categories: PizzaCategory[]) => void
	setDough: (dough: PizzaDough[]) => void
	setPrice: (price: FilterPrice) => void
	setIngredients: (ingredients: string[]) => void
	resetAllFilters: () => void
}

export type FilterPrice = "less 500" | "over 500" | "all"

export const useFilterStore = create<FilterStore>(set => ({
	categories: [],
	dough: [],
	price: "all",
	ingredients: [],
	setCategory: categories => set({ categories }),
	setDough: dough => set({ dough }),
	setPrice: price => set({ price }),
	setIngredients: ingredients => set({ ingredients }),
	resetAllFilters: () => set({ categories: [], dough: [], price: "all", ingredients: [] }),
}))
