import React, { useState } from "react";
import GoalCard from "./goalCard";
import { useSelector } from 'react-redux';
import { selectGoals } from './goalsSlice';

const GoalsList = () => {
    const [display, setDisplay] = useState("notdisplayed");
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };

    const goals = useSelector(selectGoals);

    return (
        <div id="goalslist" className="rounded border border-light glasspane text-white">
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-11">
                        <div className="row">
                            {goals.map((goal) => {
                                return (
                                    <div className="col-2 border border-secondary m-2 align-items-center productbox" onMouseEnter={e => showButton(e)}
                                        onMouseLeave={e => hideButton(e)}>
                                        <p>{goal.goal}</p>
                                        <div>
                                            <button className={display}>I might be an invisible button</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <GoalCard />
        </div>
    )
}

export default GoalsList;