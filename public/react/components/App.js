import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemList';
import HomeNavbar from './HomeNavbar';

import { Button } from 'react-bootstrap';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

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
		getItems();
	}, []);

	return (
		<main>	
			<HomeNavbar/>
		<div className='jumbotron'>

		</div>
		{/* <div className='inventory'>
			<div className='left'></div>
			<div className='right'></div>
		</div> */}

		<div className="listContainer">
			<ItemsList items={items} setItems={setItems}/>
		</div>
		</main>
	)
}