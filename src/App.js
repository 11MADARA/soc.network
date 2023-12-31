import './App.css';
import { Routes, Route } from 'react-router-dom';
import DialogesContainer from './components/dialoges/dialogesContainer';
import NavContainer from './components/navigation/navigationContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/login';
import Setting from './components/settings/settings';
const App = () => {
  return (
    <div className='background'>
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='container'>
          <NavContainer />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile/*"
                element={<ProfileContainer />} />
              <Route path="/profile/:userId?"
                element={<ProfileContainer />} />
              <Route path="/dialoges/*"
                element={<DialogesContainer />} />
              <Route path="/users/*"
                element={<UsersContainer />} />
              <Route path="/login/*"
                element={<div className='login'><Login /></div>} />
              <Route path="/settings/*"
                element={<div className='settings'><Setting /></div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
