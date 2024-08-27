import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import qustionsData from './questionsData';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='quiz' element={<QuizPage />}></Route>
      <Route path='result' element={<ResultPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
