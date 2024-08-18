import { Text } from "@mantine/core"
import { PizzaDough, PizzaSize } from "../../types/pizza"
import styles from "./ProductCard.module.scss"

interface Props {
	name: string
	imageUrl: string
	sizes: PizzaSize[]
	dough: PizzaDough[]
	ingredients: string[]
}

const ProductCard = ({ name, imageUrl, sizes, dough, ingredients }: Props) => {
	return (
		<div className={styles.card}>
			<img
				src={imageUrl}
				alt={name}
				width={250}
				height={250}
			/>
			<div className={styles.infoBlock}>
				<h3>{name}</h3>
				<Text>от {sizes[0].price} ₽</Text>
			</div>
			<div>
				<Text size="xl">Тесто:</Text>
				{dough.map(item => (
					<Text key={item}>{item}</Text>
				))}
			</div>
			<div className={styles.ingredients}>
				<Text size="xl">Ингредиенты:</Text>
				{ingredients.map(item => (
					<span key={item}>{` ${item}`}</span>
				))}
			</div>
		</div>
	)
}

export default ProductCard
