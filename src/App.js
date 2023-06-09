
import './App.css'
import Casdlist from './component/Casdlist';
import Nev from './component/Nev';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nev/>
      <Routes>
        <Route path="/" element={<Casdlist key="general" category="general"/>}/>
        <Route path="/health" element={<Casdlist key="health" category="health"/>}/>
        <Route path="/business" element={<Casdlist key="business" category="business"/>}/>
        <Route path="/entertainment" element={<Casdlist key="entertainment" category="entertainment"/>}/>
        <Route path="/science" element={<Casdlist key="science" category="science"/>}/>
        <Route path="/sports" element={<Casdlist key="sports" category="sports"/>}/>
        <Route path="/technology" element={<Casdlist key="technology" category="technology"/>}/>
      </Routes>
      
      </BrowserRouter>
  
    
    </div>
  );
}

export default App;
