import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { RootState} from './redux/store'
import { addTask } from './redux/reducer';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import './App.css';


interface Task {
  id: number;
  title: string;
  completed: boolean;
}
const App: React.FC = () => {
const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);
const dispatch = useDispatch();

return (
  <>
<div style={{textAlign: 'center', margin: '50px'}}>
  <h1>Task Manager</h1>
  <AddTask onAddTask={(task) => task.trim() !== '' && dispatch(addTask(task))} />
</div>


<div style={{display: 'flex', justifyContent: 'center'}}>
 <ul>
  {
    tasks.map(
      (taskItem) => <Task key = {taskItem.id} id= {taskItem.id} name={taskItem.title} completed={taskItem.completed}/> 
       
    )
  }
  </ul>
</div>

</>

)}
export default App