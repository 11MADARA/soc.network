import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DialogesContainer from './components/dialoges/dialogesContainer';
import NavContainer from './components/navigation/navigationContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/login';
import { lazy } from 'react';
import Setting from './components/settings/settings';
import { connect } from 'react-redux';
import { initializeTC } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { compose } from 'redux';
const ProfileContainer=lazy(()=>import('./components/profile/ProfileContainer'))
const UsersContainer = lazy(() => import('./components/users/usersContainer'));

class App extends React.Component{
  componentDidMount(){
    this.props.initializeTC();
  }
  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
    return<div className='background'>
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='container'>
          <NavContainer />
          <div className='app-wrapper-content'>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/profile/*"
                element={<ProfileContainer />} />
              <Route path="/profile/:userId?"
                element={<ProfileContainer />} />
              <Route path="/dialoges/*"
                element={<DialogesContainer />} />
              <Route path="/users/*"
                element={<UsersContainer/>} />
              <Route path="/login/*"
                element={<div className='login'><Login /></div>} />
              <Route path="/settings/*"
                element={<div className='settings'><Setting /></div>} />
            </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  };
}
const mapStateToProps=(state)=>({
  initialized:state.app.initialized
})

export default compose(connect(mapStateToProps,{initializeTC}))(App);
