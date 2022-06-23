import React from 'react';
import classes from './ShowText.module.css';

const ShowText = ({ gameResult, onCLickPlayGame, medals }) => {
	const compareFunc = (num1, num2) => {
		return num1 > num2;
	};
	return (
		<section className={classes.showtext}>
			<div>
				{gameResult && (
					<h3>{`The winner is ${
						compareFunc(medals.player, medals.bot) ? 'you' : 'bot'
					}!`}</h3>
				)}
				<h3>{`You wanna play ${gameResult ? 'again' : ''}?`}</h3>
			</div>
			<button className={classes.yesbutton} onClick={onCLickPlayGame}>
				<h3>YES</h3>
			</button>
			<details>
				<summary>Game's rules</summary>
				<small>
					You must find a number between 0 and 99 randomly generated
					by the computer. You have 7 attempts per game.
				</small>
			</details>
		</section>
	);
};

export default ShowText;
