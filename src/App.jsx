
// import Movie from "./components/Movie";

import UseReducer from "./hooks/UseReducer";

//api fetch
import P1 from "./components/p1";
// import UserForm from "./components/UserForm";
// import Axiosservice from "./services/Axiosservice";
// import FetchDataservice from "./services/FetchDataservice";

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

//image Slider
import ImgSlider from "./components/ImgSlider";
import UserCard from "./components/UserCard";
import ProcessData2 from "./c1/ProcessData";
import Counter from "./c1/Counter";

//Redux
// import Todo from "./components/Todo";
import Todo1 from "./components/Todo1";


export default function App() {

  const users= [
    {name: 'Ritik', age: 20, location: 'patna'},
    {name: 'Rahul', age: 20, location: 'hajipur'},
    {name: 'Rishika', age: 20, location: 'kanpur'},
  ];

  return(<div>
    {/* <Movie/> */}


    {/* api services */}
    {/* <Axiosservice /> */}
    {/* <FetchDataservice /> */}
    {/* <P1/> */}

    {/* routing */}
    {/* <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router> */}

    {/* Redux */}
      {/* <Todo /> */}
      {/* <Todo1/> */}

    {/* useReducer */}
    <UseReducer />

    {/* form  validation*/}
    {/* <UserForm /> */}

    {/* Image Slider */}
    {/* <ImgSlider/> */}

    {/* 1 */}
    {/* <div>
      <h1>User Profile</h1>
      <UserCard users={users} />
    </div> */}

    {/* 2 */}
    {/* <ProcessData2 /> */}

    {/* 5 */}
    {/* <Counter /> */}

    {/* 6 */}
    



    

    

  </div>
  );
}

//json-server --watch db.json --port 3001
