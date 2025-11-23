import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Menu />
    </div>
  );
};
