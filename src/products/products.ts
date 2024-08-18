import { Pizza } from "../types/pizza"

export const pizzas: Pizza[] = [
	{
		name: "Сырная",
		ingredients: ["Сливочная моцарелла", "Сыры чеддер и пармезан"],
		sizes: [
			{ size: 25, price: 450 },
			{ size: 30, price: 750 },
		],
		dough: ["Тонкое", "Традиционное"],
		categories: ["vegan"],
		imageUrl: "/pizzas/cheese.avif",
	},
	{
		name: "Пепперони",
		ingredients: ["Пикантная пепперони", "Сливочная моцарелла", "Свежие томаты"],
		sizes: [
			{ size: 25, price: 550 },
			{ size: 30, price: 800 },
		],
		dough: ["Тонкое", "Традиционное"],
		categories: ["meat"],
		imageUrl: "/pizzas/pepperoni.avif",
	},
	{
		name: "Двойной цыпленок",
		ingredients: ["Нежный цыпленок", "Сливочная моцарелла"],
		sizes: [
			{ size: 25, price: 470 },
			{ size: 30, price: 760 },
			{ size: 35, price: 100 },
		],
		dough: ["Традиционное"],
		categories: ["meat"],
		imageUrl: "/pizzas/double-chicken.avif",
	},
	{
		name: "Диабло",
		ingredients: [
			"Острая чоризо",
			"Острый перец халапеньо",
			"Митболы",
			"Свежие томаты",
			"Сладкий перец",
			"Красный лук",
			"Сливочная моцарелла",
		],
		sizes: [{ size: 30, price: 760 }],
		dough: ["Тонкое"],
		categories: ["meat", "spicy"],
		imageUrl: "/pizzas/diablo.avif",
	},
]
