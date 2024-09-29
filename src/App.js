import './styles/App.css';
import Header from "./components/header";
import {Route, Routes} from 'react-router-dom';
import About from "./components/about";
import Main from "./components/main";
import AddCar from "./components/AddCar";
import Car from "./components/Car";



function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />}/>
                <Route path="/car/add" element={<AddCar />}/>
                <Route path="/car/:id" element={<Car/>} />
            </Routes>
        </>
    );
}

export default App;
