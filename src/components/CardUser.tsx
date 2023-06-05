import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {userState} from "../pages/Home"

interface CardUserProps {
	user: userState
}

const CardUser: React.FC<CardUserProps>=({user}) => {
	return (
		<Card style={{width: '18rem'}}>
			<Card.Body>
				<Card.Title>User</Card.Title>
				<Card.Text>
					{user.name}
				</Card.Text>
				<Card.Text>
					{user.age}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	)
}

export default CardUser