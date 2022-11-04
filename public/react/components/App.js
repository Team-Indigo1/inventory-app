import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function getItems() {
		try {
			const res = await fetch(`${apiURL}/items`);
			const data = await res.json();

			console.log('data from items', data)
			setItems(data);
		} catch (error) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchSauces();
		getItems();
	}, []);

	return (
		<main>	

		<div className='jumbotron'>

		</div>
		<div className='inventory'>
			<div className='left'></div>
			<div className='right'></div>
		</div>
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<SaucesList sauces={sauces} />
			<ItemsList items={items}/>
		</main>
	)
}