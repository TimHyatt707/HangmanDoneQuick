import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import './index.css';

const MainMenuScreen = () => {
  return (
    <div className="main-menu">
      <PrimaryButton text="Play Game" route="/play" />
      <PrimaryButton text="Leaderboard" route="/leaderboard" />
      <PrimaryButton text="Settings" route="/settings" />
    </div>
  );
};

export default MainMenuScreen;
