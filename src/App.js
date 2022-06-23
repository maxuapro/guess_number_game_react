import { useEffect, useState } from 'react';
import MainContainer from './components/MainContainer';
import Score from './components/Score';
import Game from './components/Game';
import ShowText from './components/ShowText';
// CSS
import classes from './App.module.css';
// media
import bell from './media/bells.wav';
import laugh from './media/evillaugh.wav';

// const presets = {
// 	num_of_medals: 5,
// 	num_of_lives: 7,
// 	medal_symbol: '🪙',
// 	life_symbol: '❤️',
// }

const roundWinBell = new Audio(bell);
const roundLooseLaugh = new Audio(laugh);

function App() {
	console.log('Hello from App');
	// Number of medals ( number of rounds )
	const [medals, setMedals] = useState({ total: 5, bot: 0, player: 0 });
	// show game ?
	const [showGame, setShowGame] = useState(false);
	// Who won ?
	const [theWinner, setTheWinner] = useState(false);

	const playerGetsMedal = () => {
		roundWinBell.play();
		setMedals((prev) => {
			return { ...prev, total: prev.total - 1, player: prev.player + 1 };
		});
	};

	const botGetsMedal = () => {
		roundLooseLaugh.play();
		setMedals((prev) => {
			return { ...prev, total: prev.total - 1, bot: prev.bot + 1 };
		});
	};

	// TURN ON PLAY GAME
	const onCLickPlayGame = () => {
		setShowGame(true);
		setMedals({ total: 5, bot: 0, player: 0 })
	};

	useEffect(() => {
		if (medals.total === 0) {
			setShowGame(false)
			setTheWinner(true)
		}
	}, [medals.total]);

	return (
		<MainContainer>
			{/* SCORES */}
			<h2 className={classes.title}>The Ultimate Guess Number Game</h2>
			<Score
				bot_medals={medals.bot}
				player_medals={medals.player}
				medals_left={medals.total}
			/>
			{showGame ? (
				<Game
					rounds={medals.total}
					playerGetsMedal={playerGetsMedal}
					botGetsMedal={botGetsMedal}
				/>
			) : (
				<ShowText
					medals={medals}
					gameResult={theWinner}
					onCLickPlayGame={onCLickPlayGame}
				/>
			)}
		</MainContainer>
	);
}

export default App;
