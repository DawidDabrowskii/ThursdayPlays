import Header from './components/Layout/Header';
import Home from './routes/Home/Home';
import PageNotFound from './routes/PageNotFound/PageNotFound';
import Players from './routes/Players/Players';
import GenerateTeams from './routes/GenerateTeams/GenerateTeams';
import Teams from './routes/Teams/Teams';
import Participate from './routes/Participate/Participate';

import { Routes, Route } from 'react-router-dom';

import './index.css';

function App() {
  return (
    <div className='App bg-body h-screen overflow-x-hidden'>
      <div className='bg-overlay h-full'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Players />} />
          <Route path='/generate' element={<GenerateTeams />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/participate' element={<Participate />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
