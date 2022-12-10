import React, { Suspense } from 'react';
import { compose } from 'redux';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.css';

import { initialiseApp } from './redux/app-reducer';

import Preloader from './components/shared/preloader/preloader';
import NavBarContainer from './components/feature/nav-bar/nav-bar-container';

import FriendsContainer from './components/feature/friends/friends-container';
import Music from './components/feature/music/music';
import Video from './components/feature/video/video';
import Login from './components/feature/login/login';

import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspence } from './hoc/with-suspense';

const DialogsContainer = React.lazy(() => import('./components/feature/dialogs/dialogs-container'));
const ProfileContainer = React.lazy(() => import('./components/feature/profile/profile-container'));

class App extends React.Component {

  componentDidMount() {
    this.props.initialiseApp();
  }

  render() {

    if (!this.props.initialised) {
      return <Preloader />
    }

    return (
      <div className='app'>
        <NavBarContainer />
        <div className="content">
          <Route path="/profile/:userId?" render={() => {
            return <Suspense fallback={<div>Loading...</div>} ><ProfileContainer /></Suspense>
          }} />
          <Route path="/dialogs" render={withSuspence(DialogsContainer)} />
          <Route path="/friends" render={() => <FriendsContainer />} />
          <Route path="/music" component={Music} />
          <Route path="/video" component={Video} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialised: state.app.initialised
});

const AppContainer = compose(withRouter,
  connect(mapStateToProps, { initialiseApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>;
};

export default SamuraiJSApp;