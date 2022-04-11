
import Mostrarblog from "./blog/Mostrarblog.js";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import CompEditBlog from "./blog/Editarblog.js";
import Crearblog from "./blog/Crearblog.js";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Mostrarblog/>} />
          <Route path='/create' element= {<Crearblog/>} />
          <Route path='/edit/:id' element= {<CompEditBlog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
