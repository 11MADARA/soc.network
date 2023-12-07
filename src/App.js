import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import { Routes, Route } from 'react-router-dom';
import DialogesContainer from './components/dialoges/dialogesContainer';
import NavContainer from './components/navigation/navigationContainer';
import UsersContainer from './components/users/usersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile/*"
            element={<Profile />} />
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
