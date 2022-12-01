import './App.css';
import Main from './components/main/index'
import PageOne from './components/page_one/index'
import PageTwo  from './components/page_two';
import SampleOne  from './components/Sample_One';
import SampleTwo  from './components/Sample_Two';
import { Route, Routes,} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/main" exact element={<Main/>}/>
      <Route path="/pageone" exact element={<PageOne/>}/>
      <Route path="/pagetwo" exact element={<PageTwo/>}/>
      <Route path="/sampleone" exact element={<SampleOne/>}/>
      <Route path="/sampletwo" exact element={<SampleTwo/>}/>
      </Routes>
    </div>
  );
}

export default App;
