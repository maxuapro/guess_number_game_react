import React from 'react';
import classes from './MainContainer.module.css';

const MainContainer = ({ children }) => {
	return <div className={classes.main}>{children}</div>;
};

export default MainContainer;
