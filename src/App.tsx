import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WellcomePage } from './pages/WellcomePage';
import { Header } from './components/Header';

export const App: FC = () => {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path="/" element={<WellcomePage />} />

        <Route path="*" element={<h1>Not found page</h1>} />
      </Routes>
    </div>
  );
}
