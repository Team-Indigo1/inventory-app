import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemList';
import HomeNavbar from './HomeNavbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState(null);
	const [userEmail, setUserEmail] = useState({email:'mzkidd5@gmail.com'});

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

	// useEffect(() => {
	// 	getItems();
	// }, []);

	return (
		<main>	
			<HomeNavbar />
			{ userEmail ?
			<div > { items ? 
				<div className="listContainer">
					<ItemsList items={items} setItems={setItems}/>
				</div>
				:
				<div className='allOrSearch'>
				<div className='row'>
					<div className='col' id='left'>
						<Button onClick={()=>{getItems()}}>Search All Items</Button>
					</div>
					<div className='col' id="right">
					<InputGroup className="mb-3">
						<h2>Search by Category</h2>
						<Form.Control
						placeholder="Search by Category"
						aria-label="Search by Category"
						aria-describedby="basic-addon2"
						/>
						<Button variant="outline-secondary" id="button-addon2">
						Search
						</Button>
					</InputGroup>
					</div>
				</div>
				</div>
				}
			</div>
			:
			<div className='loginForm'>
				<div className='logContainer'>
				<div className='row'>
				<div className='col'>
				<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
				</Form>
				</div>
			</div>
				</div>
				
			</div>
			
			}
		

		
		</main>
	)
}