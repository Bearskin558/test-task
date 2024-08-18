export interface Pizza {
	name: string
	ingredients: string[]
	sizes: PizzaSize[]
	dough: PizzaDough[]
	categories: PizzaCategory[]
	imageUrl: string
}

export type PizzaDough = "Тонкое" | "Традиционное"
export type PizzaCategory = "meat" | "vegan" | "spicy"

export interface PizzaSize {
	size: number
	price: number
}
