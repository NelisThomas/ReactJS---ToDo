import React from 'react';
import {Input, Icon} from 'semantic-ui-react';

// const ToDoForm = (props) => {
//     const Form =(props) => {
//         <div>
//             <Input 
//             inputStyle
//             onChange={props.changeInput}
//             placeholder = "Add a thing to do"
//             value = {props.passedValue}
//             icon={<Icon 
//                 name='add' 
//                 inverted circular link
//                 onClick={props.submitToDo}/>}/>
//         </div>
//     }
//     return (<Form/>)
// }
class ToDoForm extends React.Component{
    render() {
        let Form = 
                    <Input 
                    onChange={this.props.changeInput}
                    placeholder = "Add a thing to do"
                    value = {this.props.passedValue}
                    icon={<Icon 
                        name='add' 
                        inverted circular link
                        onClick={this.props.submitToDo}
                        toDoList = {this.props.toDoList}/>}/>
            return <div>{Form}</div>
            
    }
}

export default ToDoForm;