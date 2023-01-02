import React from "react";
import { useSelector } from 'react-redux';
import { selectGoals, removeGoal, completeGoal } from './goalsSlice';
import { useDispatch } from 'react-redux';
import { CgCloseR, CgCheckR } from 'react-icons/cg';

const GoalsList = () => {

    const goals = useSelector(selectGoals);
    const dispatch = useDispatch();

    return (
        <div className="rounded border border-light glasspane text-white">
                <div className="d-flex flex-row flex-wrap justify-content-center" >
                    {goals.map((goal) => {
                        return (
                            <div className="border border-white rounded align-items-center m-2 p-3 d-flex goalbox"
                                style={{ backgroundColor: goal.completed ? "rgba(95, 95, 95, 0.5)" : goal.color, opacity: goal.completed ? "0.5" : "1" }}
                                key={goal.id}>
                                <div className="d-flex flex-row absolute">
                                    <button value={goal.id} type="button" className="displaybutton" onClick={() => dispatch(completeGoal(goal.id))}><CgCheckR value={goal.id} /></button>
                                    <button value={goal.id} type="button" className="displaybutton" onClick={() => dispatch(removeGoal(goal.id))}><CgCloseR value={goal.id} /></button>
                                </div>
                                <div>
                                    <p className="py-0 my-0" >{goal.goal}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default GoalsList;