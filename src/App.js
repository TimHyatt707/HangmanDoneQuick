import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { withTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import theme from './theme';
import './App.css';

const LoadableMainMenuScreen = Loadable({
  loader: () => import('./screens/MainMenuScreen'),
  loading: () => <div>Loading . . .</div>
});

const LoadableGameScreen = Loadable({
  loader: () => import('./screens/GameScreen'),
  loading: () => <div>Loading . . .</div>
});

const LoadableLeaderboardScreen = Loadable({
  loader: () => import('./screens/LeaderboardScreen'),
  loading: () => <div>Loading . . .</div>
});

const LoadableSettingsScreen = Loadable({
  loader: () => import('./screens/SettingsScreen'),
  loading: () => <div>Loading . . .</div>
})

const App = () => {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Router>
          <Route path="/" exact component={LoadableMainMenuScreen} />
          <Route path="/play" component={LoadableGameScreen} />
          <Route path="/leaderboard" component={LoadableLeaderboardScreen} />
          <Route path="/settings" component={LoadableSettingsScreen} />
        </Router>
      </div>
    </Provider>
  );
};

export default withTheme(theme)(App);
