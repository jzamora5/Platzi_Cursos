import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className={styles.MyOrder}>
			<div className={styles['MyOrder-container']}>
				<div className={styles['title-container']}>
					<img className={styles['more-clickable-area'], styles.pointer} src={arrow} alt="arrow" onClick={() => toggleOrder()} />
					<p className={styles.title}>My order</p>
				</div>
				<div className={styles['my-order-content']}>
					<div className={styles['my-orders']}>
						{state.cart.map((product) => (
							<OrderItem product={product} key={`orderItem-${product.id}`} />
						))}
					</div>
					<div className={styles.order}>
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button className={styles['primary-button']}>
						Checkout
					</button>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;
