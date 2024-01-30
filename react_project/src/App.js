import './index.css';
import Header from './components/Header';
import ViewerList from './pages/ViewerList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header>
              <Routes>
                <Route path='/' element={<ViewerList/>}/>
                <Route path='/viewers' element={<ViewerList/>}/>
              </Routes>
            </Header>
        </BrowserRouter>
    </div>
  );
}

export default App;