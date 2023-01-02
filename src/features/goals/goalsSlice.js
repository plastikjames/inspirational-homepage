import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    goalsList: [{ id: "1000", goal: "Enter goals above and they will appear here", completed: false, color: "rgba(238, 94, 94, 0.5)" }, 
    { id: "1001", goal: "You can also use the arrow keys to change the picture", completed: false, color: "rgba(238, 236, 94, 0.5)" }],
    isLoadingGoals: false,
    failedToLoadGoals: false
};

const colorPicker = () => {
    const colors = ["238, 94, 94, 0.5", "238, 236, 94, 0.5", "94, 238, 118, 0.5", "94, 156, 238, 0.5", "185, 94, 238, 0.5"];
    const number = Math.floor(Math.random() * 5);
    return "rgba("+colors[number]+")";
}

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: initialState,
    reducers: {
        addGoal: (state, action) => {
            const goalId = uuidv4();
            const color = colorPicker();
            state.goalsList.push({ id: goalId, goal:action.payload, color:color });
        },
        removeGoal: (state, action) => {
            state.goalsList = state.goalsList.filter(goal => goal.id !== action.payload);
        },
        completeGoal: (state, action) => {
            const index = state.goalsList.findIndex(goal => goal.id === action.payload);
            state.goalsList[index].completed = true;
        }
    }

});

export const { addGoal, removeGoal, completeGoal } = goalsSlice.actions;
export const selectGoals = (state) => state.goals.goalsList;
export default goalsSlice.reducer;    