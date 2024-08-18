import styles from "./ClientCard.module.scss"

const ClientCard = () => {
	return (
		<div
			className={styles.wrapper}
			tabIndex={0}
		>
			<input
				type="checkbox"
				id="flipControl"
				className={styles.flipControl}
			/>
			<label htmlFor="flipControl">
				<div className={styles.front}>
					<p>РусГидро</p>
					<div className={styles.infoBlock}>
						<p>i</p>
					</div>
				</div>
				<div className={styles.back}>
					<p>РАО</p>
					<p>Энергетические системы Востока</p>
					<p>Крупнейший поставщик тепловой электроэнергии Дальнего Востока</p>
				</div>
			</label>
		</div>
	)
}

export default ClientCard
