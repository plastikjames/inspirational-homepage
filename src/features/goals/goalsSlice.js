import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goalsList: [{ id: 1000, goal: "Enter goals above and they will appear here", completed: false, color: "blue" }, 
    { id: 1001, goal: "You can also use the arrow keys to change the picture", completed: false, color: "green" },{ id: 1000, goal: "Enter goals above and they will appear here", completed: false, color: "blue" }, 
    { id: 1001, goal: "You can also use the arrow keys to change the picture", completed: false, color: "green" },{ id: 1000, goal: "Enter goals above and they will appear here", completed: false, color: "blue" }, 
    { id: 1001, goal: "You can also use the arrow keys to change the picture", completed: false, color: "green" },{ id: 1000, goal: "Enter goals above and they will appear here", completed: false, color: "blue" }, 
    { id: 1001, goal: "You can also use the arrow keys to change the picture", completed: false, color: "green" },{ id: 1000, goal: "Enter goals above and they will appear here", completed: false, color: "blue" }, 
    { id: 1001, goal: "You can also use the arrow keys to change the picture", completed: false, color: "green" }],
    isLoadingGoals: false,
    failedToLoadGoals: false
};

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: initialState,
    reducers: {
        addGoal: (state, action) => {
            const { id, front, back } = action.payload;
            state.goals[id] = { id: id, front: front, back: back };
        },
        removeGoal: (state, action) => {

        },
        completegoal: (state, action) => {

        }
    }

});

export const { addGoal, removeGoal, completeGoal } = goalsSlice.actions;
export const selectGoals = (state) => state.goals.goalsList;
export default goalsSlice.reducer;    