import React from 'react'
import styles from '../styles/Home.module.css'
import { useSpring, animated } from 'react-spring'

const Index = () => {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 },
	}))

	const calc = (x, y) => [
		-(y - window.innerHeight / 2) / 20,
		(x - window.innerWidth / 2) / 20,
		1.1,
	]
	const trans = (x, y, s) =>
		`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

	return (
		<div className={styles.container}>
			<animated.div
				className={styles.card}
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [0, 0, 1] })}
				style={{ transform: props.xys.interpolate(trans) }}
			/>
		</div>
	)
}

export default Index
