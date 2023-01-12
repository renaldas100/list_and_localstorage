import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TaskList from "./components/task_list/task_list";

function App() {



  return (
    <div className="container mt-5">
        <TaskList></TaskList>
    </div>
  );
}

export default App;
