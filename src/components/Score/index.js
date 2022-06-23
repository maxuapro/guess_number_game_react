import React from 'react';
// CSS
import classes from './Score.module.css';

const showMedals = (num) => {
	const arr = [];
	for (let i = 0; i < num; i++) {
		arr.push('🪙');
	}
	return arr;
};

const Score = ({ bot_medals, player_medals, medals_left }) => {
	return (
		<div className={classes.score_block}>
			{/* TOTAL MEDALS */}
			<div className={classes.medals_left}>
				<h3>Medals to earn:</h3>
				<h3>
					{showMedals(medals_left).map((medal, index) => {
						return <span key={index}>{medal}</span>;
					})}
				</h3>
			</div>

			{/* THE ACTUAL SCORE BLOCK */}
			<div className={classes.score_container}>
				{/* BOT TAB */}
				<div className={classes.score_tab}>
					<h3>BOT</h3>
					<div>
						{bot_medals ? (
							showMedals(bot_medals).map((medal, index) => {
								return <span key={index}>{medal}</span>;
							})
						) : (
							<span>0</span>
						)}
					</div>
				</div>

				{/* PLAYER TAB */}
				<div
					className={`${classes.score_tab} ${classes.score_tab_another}`}
				>
					<h3>YOU</h3>
					<div>
						{player_medals ? (
							showMedals(player_medals).map((medal, index) => {
								return <span key={index}>{medal}</span>;
							})
						) : (
							<span>0</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Score;
