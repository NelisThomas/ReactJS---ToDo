import React from 'react';

import {ToDoList} from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';


export class ToDoContainer extends React.Component{
    constructor(){
        super();

        this.state = {
            toDo: [
                {id: 1, title: "Wash dishes", editing: false},
                {id: 2, title: "Clean dog", editing: false},
                {id: 3, title: "Buy food", editing: false}
            ],
            inputValue: "",
            idCounter: 4
        }
        this.deleteToDo = this.deleteToDo.bind(this);
        this.inputHandle = this.inputHandle.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }
    //TODOLIST
    deleteToDo(id){
        this.setState({
            toDo: this.state.toDo.filter((x)=> {
                return x.id !== id
            })
        });
    }
    handleToDoClick(id){
        let index;
        function setIndex(id) {
            console.log(this)
            let indexObject = test.props.toDoList.filter((x) => {
                return x.id === id
            })
            index = this.state.toDo.indexOf(indexObject)
        }
        setIndex(id);
        let toDos = [...this.state.toDo];
        let toDo = toDos[index];
        toDo.editing = true;
        toDos[index] = toDo;
        this.setState({
            toDo: toDos
        })
    }
    //TODO FORM
    inputHandle(x){
        this.setState({
            inputValue: x.target.value
        })
    }
    addToDo(){
        let newToDo = {
            id: this.state.idCounter,
            title: this.state.inputValue
        };
        
        let newArray = [...this.state.toDo, newToDo];
        if(this.state.inputValue !== ""){
            this.setState({
                toDo: newArray,
                idCounter: this.state.idCounter + 1,
                inputValue:''
            })
        } else {
            this.setState({
                inputBG: 'red'
            })
        }
    }
    //RENDER
    render(){
        return(
            <div>
                <ToDoForm 
                submitToDo = {this.addToDo}
                changeInput= {this.inputHandle}
                passedValue = {this.state.inputValue}
                toDoList = {this.state.toDo}/>
                <ToDoList 
                thingsToDo = {this.state.toDo}
                deleteToDo = {this.deleteToDo}
                handleClick = {this.handleToDoClick}/>
            </div>
        )
    }
}