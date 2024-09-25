import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music'
// import Setting from './components/Setting/Setting'
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


//Основной компонент приложения
const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes> {/* Определяем маршруты для профиля */}
            <Route path='/profile' element={<Profile />}/>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />}/>
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            {/* <Route path='/setting' element={<Setting />} /> */}
          </Routes>
        </div>
      </div>
  );
};

export default App;