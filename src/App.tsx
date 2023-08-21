import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WellcomePage } from './pages/WellcomePage';
import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: FC = () => {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path="/" element={<WellcomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
