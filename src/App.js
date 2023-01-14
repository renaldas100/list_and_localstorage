import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TaskList from "./components/task_list/task_list";
import Footer from "./components/footer";
import {useState, useEffect} from "react";

function App() {

    const [kiekis,setKiekis]=useState();


  return (
    <div className="container mt-5">
        <TaskList updateKiekis={setKiekis}></TaskList>
        <nav className="navbar fixed-bottom bg-body-tertiary">
            <div className="container-fluid">
                <Footer kiekis={kiekis}></Footer>
            </div>
        </nav>
    </div>
  );
}

export default App;
