import React from 'react';
import { Button } from 'semantic-ui-react';

export class ToDoItem extends React.Component{
    render(){
        let task = this.props.task;
        let taskDisplay;
        function setTaskDisplay(){
            if (task.editing){
                taskDisplay = (
                    <p>{task.title}</p>
                )
            } else {
                taskDisplay = (
                    <input placeholder = {task.title}></input>
                )
            }
        }
        setTaskDisplay();

        return(
            <div>
                {taskDisplay}
                <Button 
                circular
                icon = 'trash alternate'
                onClick={() => this.props.deleteToDo(task.id)}/>
            </div>
        )
    }
}
export default ToDoItem;