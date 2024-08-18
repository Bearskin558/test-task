import classNames from "classnames"
import { useState } from "react"
import styles from "./Burger.module.scss"

const Burger = () => {
	const [isActive, setisActive] = useState(false)

	const burgerClassname = classNames({ [styles.burger]: true, [styles.active]: isActive })
	return (
		<button
			className={burgerClassname}
			onClick={() => setisActive(!isActive)}
		>
			<span className={styles.top}></span>
			<span className={styles.main}></span>
			<span className={styles.bottom}></span>
		</button>
	)
}

export default Burger
