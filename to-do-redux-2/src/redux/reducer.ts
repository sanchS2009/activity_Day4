import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface Task{
    id:number;
    title:string;
    completed:boolean;
}

interface State{
    tasks: Task[];

}

const initialState: State={
    tasks:[],
}

const tasksSlice = createSlice(
    {
        name: 'task',
        initialState,
        reducers:{
            addTask: (state, action: PayloadAction<string>) =>{
                const newTaskObj: Task = {
                    id: state.tasks.length +1,
                    title: action.payload,
                    completed: false,
                };
                state.tasks.push(newTaskObj);
            },
            delTask: (state, action: PayloadAction<string>) =>{
                const newTaskObj: Task = {
                    id: state.tasks.length +1,
                    title: action.payload,
                    completed: true,
                };
                state.tasks.push(newTaskObj);
            }
        }
    }
);

export const {addTask, delTask} = tasksSlice.actions;
export default tasksSlice.reducer;