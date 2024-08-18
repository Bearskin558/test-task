import { create } from "zustand"
import { pizzas } from "../products/products"
import { Pizza } from "../types/pizza"

interface PizzaStore {
	pizzas: Pizza[]
}

export const usePizzaStore = create<PizzaStore>(() => ({
	pizzas,
}))
