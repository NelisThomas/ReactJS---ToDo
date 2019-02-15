import React from 'react';
import {List, Segment} from 'semantic-ui-react';
import ToDoItem from './ToDoItem';

export class ToDoList extends React.Component{
    render(){
        return(
            <Segment inverted>
                <List divided inverted relaxed>
                    {this.props.thingsToDo.map( (task) => (
                        <List.Item 
                        key={task.id}
                        onClick={this.props.handleClick(task.id)}>
                            <List.Content
                            style={{display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '1.5em'}}>
                                <ToDoItem
                                task = {task}/>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            </Segment>
        )
    }
}