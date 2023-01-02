import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addGoal } from './goalsSlice';

const GoalsInput = () => {
    const [inputBox, setInputBox] = useState("");
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setInputBox(e.target.value);
    }

    const handleSubmit = (e) => {
        dispatch(addGoal(inputBox))
        setInputBox("");
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            handleSubmit();
        } 
    }

    return (
        <div className="form-group rounded justify-content-center border border-light glasspane text-white my-2" onSubmit={handleSubmit}>
            <label htmlFor="goaltodo" className="display-5 py-2">Whats on your mind today?</label>
            <input type="text" autoComplete="off" className="formcontrol my-2" id="goaltodo" value={inputBox} onChange={handleChange} onKeyDown={handleKeyPress}></input>
        </div>
    )
}

export default GoalsInput;