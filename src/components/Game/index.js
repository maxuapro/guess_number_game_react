import { useEffect, useState } from 'react';
// CSS
import classes from './Game.module.css';
// MEDIA
import image from '../../media/loading_gif.gif';

const Game = ({ rounds, playerGetsMedal, botGetsMedal }) => {
	// the number we're gonna set and check on button click
	const [numberToGuess, setNumberToGuess] = useState('');
	const [showGif, setShowGif] = useState(true);
	// random number state
	const [randomNumber, setRandomNumber] = useState(0);
	// set range to guess
	const [range, setRange] = useState([0, 99]);
	// lives
	const [lives, setLives] = useState([
		'❤️',
		'❤️',
		'❤️',
		'❤️',
		'❤️',
		'❤️',
		'❤️',
	]);

	const dialTheNumber = (num) => {
		if (numberToGuess.length < 2) {
			setNumberToGuess((prev) => prev + num);
		}
	};

	const clearTheNumber = () => {
		if (numberToGuess.length > 0) {
			setNumberToGuess((prev) => prev.slice(0, -1));
		}
	};

	const onPressGuessButton = () => {
    if (!numberToGuess){
      return
    }
		if (randomNumber > +numberToGuess && lives.length > 0) {
			console.log('it is greater');
			setRange((prev) => [numberToGuess, prev[1]]);
			setLives((prev) => prev.slice(0, -1));
			setNumberToGuess('');
		}
		if (randomNumber < +numberToGuess && lives.length > 0) {
			console.log('it is less');
			setRange((prev) => [prev[0], numberToGuess]);
			setLives((prev) => prev.slice(0, -1));
			setNumberToGuess('');
		}
		// BINGO
		if (randomNumber === +numberToGuess && lives.length > 0) {
			console.log('bingo');
			playerGetsMedal();
		}
		// LOOOOOSER...!
    if (randomNumber !== +numberToGuess && lives.length < 2) {
      console.log('lol');
      botGetsMedal();
    }
	};

	// RESTART ROUND
	useEffect(() => {
		const rn = Math.floor(Math.random() * 100);
		setRandomNumber(rn);
		setLives(['❤️', '❤️', '❤️', '❤️', '❤️', '❤️', '❤️']);
		setRange([0, 99]);
		setNumberToGuess('');
	}, [rounds]);

	// console.log(randomNumber);

	// GIF OR NUMBER
	useEffect(() => {
		if (numberToGuess) {
			setShowGif(true);
			return;
		}
		setShowGif(false);
	}, [numberToGuess]);

	return (
		<>
			{/* // ------------------- LIVES ------------------- // */}

			<div className={classes.lives}>
				<h3>{`ROUND ${Math.abs(rounds - 6)}`}</h3>
				<h3>
					{lives.map((el, ind) => {
						return <span key={ind}>{el}</span>;
					})}
				</h3>
			</div>

			{/* // ------------------- PANEL ------------------- // */}
			{/* // show -> numberToGuess or GIF */}
			<div className={classes.panel}>
				<h3>{`${range[0]} < `}</h3>
				<div className={classes.numplace}>
					{showGif ? (
						<h3>{numberToGuess}</h3>
					) : (
						<img src={image} alt="sdfsdfsdf" />
					)}
				</div>
				<h3>{` < ${range[1]}`}</h3>
			</div>

			{/* // ------------------- KEYBOARD ------------------- // */}
			<div>
				<div className={classes.keyboard}>
					<div
						className={classes.button}
						onClick={() => dialTheNumber(1)}
					>
						<h3>1</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(2)}
					>
						<h3>2</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(3)}
					>
						<h3>3</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(4)}
					>
						<h3>4</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(5)}
					>
						<h3>5</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(6)}
					>
						<h3>6</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(7)}
					>
						<h3>7</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(8)}
					>
						<h3>8</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(9)}
					>
						<h3>9</h3>
					</div>

					<div
						className={`${classes.button} ${classes.clear}`}
						onClick={clearTheNumber}
					>
						<h3>{`< del`}</h3>
					</div>

					<div
						className={classes.button}
						onClick={() => dialTheNumber(0)}
					>
						<h3>0</h3>
					</div>

					<div
						className={`${classes.button} ${classes.guess}`}
						onClick={onPressGuessButton}
					>
						<h3>Guess</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Game;
