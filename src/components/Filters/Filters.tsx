import { Button, Checkbox, CheckboxGroup, Radio, Text } from "@mantine/core"
import { useState } from "react"
import { FilterPrice, useFilterStore } from "../../store/filterStore"
import { usePizzaStore } from "../../store/pizzasStore"
import { PizzaCategory, PizzaDough } from "../../types/pizza"
import { toCompareWithInitialState } from "../../utils/isEqualInitialState"
import { toCompareStores } from "../../utils/toCompareStores"
import { toFilterPizzas } from "../../utils/toFilterPizzas"
import styles from "./Filters.module.scss"

const ingredietns = [
	"Острая чоризо",
	"Острый перец халапеньо",
	"Митболы",
	"Свежие томаты",
	"Сладкий перец",
	"Красный лук",
	"Сливочная моцарелла",
	"Нежный цыпленок",
	"Пикантная пепперони",
	"Сыры чеддер и пармезан",
]

const doughData: PizzaDough[] = ["Тонкое", "Традиционное"]

interface CategoryData {
	value: PizzaCategory
	label: string
}

const categoryData: CategoryData[] = [
	{
		value: "meat",
		label: "Мясные",
	},
	{
		value: "vegan",
		label: "Вегетарианские",
	},
	{
		value: "spicy",
		label: "Острые",
	},
]

const Filters = () => {
	const [dough, setDough] = useState<PizzaDough[]>([])
	const [categories, setCategories] = useState<PizzaCategory[]>([])
	const [price, setPrice] = useState<FilterPrice>("all")
	const [ingredients, setIngredients] = useState<string[]>([])
	const allPizzas = usePizzaStore(state => state.pizzas)
	const filteredPizzas = toFilterPizzas(allPizzas, dough, ingredients, price, categories)
	const [
		setCategoriesStore,
		setDoughStore,
		setIngredientsStore,
		setPriceStore,
		resetAllFiltersStore,
		ingredientsStore,
		doughStore,
		priceStore,
		categoriesStore,
	] = useFilterStore(state => [
		state.setCategory,
		state.setDough,
		state.setIngredients,
		state.setPrice,
		state.resetAllFilters,
		state.ingredients,
		state.dough,
		state.price,
		state.categories,
	])

	const onChangeDoughHandler = (doughs: PizzaDough[]) => {
		setDough(doughs)
	}

	const onChangeIngredietnsHandler = (values: string[]) => {
		setIngredients(values)
	}

	const onChangePriceHandler = (price: FilterPrice) => {
		setPrice(price)
	}

	const onChangeCategoryHandler = (categories: PizzaCategory[]) => {
		setCategories(categories)
	}

	const applyButtonHandler = () => {
		setCategoriesStore(categories)
		setDoughStore(dough)
		setIngredientsStore(ingredients)
		setPriceStore(price)
	}
	const isInitialState = toCompareWithInitialState(ingredients, price, dough, categories)
	const isInitialStateStore = toCompareWithInitialState(ingredientsStore, priceStore, doughStore, categoriesStore)

	const resetButtonHandler = () => {
		if (!isInitialStateStore) resetAllFiltersStore()
		setDough([])
		setIngredients([])
		setPrice("all")
		setCategories([])
	}
	const isEqualStores = toCompareStores(
		ingredients,
		ingredientsStore,
		price,
		priceStore,
		dough,
		doughStore,
		categories,
		categoriesStore,
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.filtersBlock}>
				<Text size="lg">Тип теста:</Text>
				<Checkbox.Group
					className={styles.checkboxGroup}
					value={dough}
					onChange={doughs => onChangeDoughHandler(doughs as PizzaDough[])}
				>
					{doughData.map(dough => (
						<Checkbox
							label={dough}
							value={dough}
							key={dough}
							disabled={!filteredPizzas.some(pizza => pizza.dough.includes(dough))}
						/>
					))}
				</Checkbox.Group>
			</div>
			<div className={styles.filtersBlock}>
				<Text size="lg">Ингредиенты:</Text>
				<Checkbox.Group
					value={ingredients}
					onChange={ingredients => onChangeIngredietnsHandler(ingredients)}
					className={styles.checkboxGroup}
				>
					{ingredietns.map(item => (
						<Checkbox
							label={item}
							key={item}
							value={item}
							disabled={!filteredPizzas.some(pizza => pizza.ingredients.includes(item))}
						/>
					))}
				</Checkbox.Group>
			</div>
			<div className={styles.filtersBlock}>
				<Text size="lg">Стоиомость:</Text>
				<Radio.Group
					value={price}
					onChange={price => onChangePriceHandler(price as FilterPrice)}
					className={styles.checkboxGroup}
				>
					<Radio
						label={"Любая"}
						value="all"
					/>
					<Radio
						label={"До 500"}
						value="less 500"
					/>
					<Radio
						label={"От 500"}
						value="over 500"
					/>
				</Radio.Group>
			</div>
			<div className={styles.filtersBlock}>
				<Text size="lg">Категории:</Text>
				<Checkbox.Group
					value={categories}
					className={styles.checkboxGroup}
					onChange={categories => onChangeCategoryHandler(categories as PizzaCategory[])}
				>
					{categoryData.map(item => (
						<Checkbox
							label={item.label}
							value={item.value}
							key={item.value}
						/>
					))}
				</Checkbox.Group>
			</div>
			<div className={styles.buttonBlock}>
				<Button
					onClick={applyButtonHandler}
					color="green"
					disabled={isEqualStores}
				>
					Применить
				</Button>
				<Button
					onClick={resetButtonHandler}
					color="red"
					disabled={isInitialState && isEqualStores}
				>
					Сбросить фильтры
				</Button>
			</div>
		</div>
	)
}

export default Filters
