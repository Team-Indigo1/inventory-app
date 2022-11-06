import React, {useState} from 'react';
import apiURL from '../api';
import {Item} from './Item';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export const ItemsList = ({items}) => {

	const [oneItem, setOneItem] = useState();

	async function getItemsId(id) {
		const res = await fetch(`${apiURL}/items/${id}`);
		const data = await res.json();
		setOneItem(data);
		console.log("id from item", id)
	}

	return <div className='d-flex flex-wrap justify-content-between'>
		{oneItem ? 
		<div class="container">
		<div class="row justify-content-md-center">
		  <div class="col-5" >
			<div id='description'>
				<h2>Category: {oneItem.category}</h2>
				<h6>{oneItem.description}</h6>
				<h3>${oneItem.price}</h3>
			</div>
			<Stack gap={2}>
			<Button style={{ width:'200px'}}>Go Back</Button>
			<Button style={{ width:'200px'}}>Add to Cart</Button>
        	</Stack>
		  </div>
		  <div class="col">
			<img src={oneItem.image} style={{ height:"400px", padding:"20px"}}/>
		  </div>
		</div>
		</div>
		:
		items.map((item, idx) => {
			return <Item item={item} key={idx} clickThis={getItemsId} />
		})
		}
	</div>
} 