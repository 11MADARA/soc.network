import './App.css';
import { Routes, Route } from 'react-router-dom';
import DialogesContainer from './components/dialoges/dialogesContainer';
import NavContainer from './components/navigation/navigationContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
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
        </Routes>
      </div>
    </div>
  );
}


export default App;
