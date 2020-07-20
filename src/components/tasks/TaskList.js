import TaskManager from "../modules/TaskManager"
// import { Link } from "react-router-dom";
import TaskCard from "./TaskCard"
import React, { useState, useEffect } from 'react';
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";

const TaskList = (props) => {
    
    const [task, setTask] = useState([])
   

// get tasks function
const getTask = () => {
TaskManager.getAll().then((result) => {
    setTask(result)
    
})
}

// console.log(task)


// delete task function

// useEffect
useEffect(() => {
getTask()
}, []) 
  
// return : open form button + ArticleCard function
return (
    <>
        <main className="mainFlex">
            <section className="mainFlex__userCard">
                <UserCard />
            </section>
            <section className="mainFlex__subpage ">
                <div className="postTask__button">
                    <button type="button" className="wideBlueBtn">Add Task</button>
                </div>
                <div className="taskCard">{ task.map(element => 
                    <TaskCard key={element.id} task={element} {...props}/>
                    )}
                </div>
            </section>
            <section className="mainFlex__friendList">
                <FriendList {...props} />
            </section>
        </main>
    </>
    )

}

export default TaskList