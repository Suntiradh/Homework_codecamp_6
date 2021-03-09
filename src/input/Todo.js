import { Button, Divider, Input } from 'antd';
import React, { useState } from 'react';
import { List } from 'antd';


// Example data model
// {
//    "data": [
//       {
//          "name": "String",
//          "isAllDone": "Boolean",
//          "task": [
//             {
//                "name": "String",
//                "isDone": "Boolean"
//             }
//          ]
//       },
//       {
//          "name": "String",
//          "isAllDone": "Boolean",
//          "task": [
//             {
//                "name": "String",
//                "isDone": "Boolean"
//             }
//          ]
//       }
//    ]
// }

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [inputTaskField, setInputTaskField] = useState('');
    const [subTask, setSubTask] = useState('')

    const addTodo = () => {
        const newTodo = [...todoList];
        newTodo.push({
            data: [
                {
                    name: inputTaskField,
                    isAllDone: false,
                    task: [
                        {
                            name: subTask,
                            isDone: false
                        }
                    ]
                }
            ]
        })
        console.log(newTodo)
        setTodoList(newTodo);
        setInputTaskField('');
    }

    const addSubtask = (e, index) => {
        console.log("Index is ", index)
        console.log("Event is ", e)
        const newSubtask = [...subTask];
        newSubtask.push({
            task: [
                {
                    name: subTask,
                    isDone: false
                }
            ]
        });
        console.log(newSubtask)
        setSubTask(newSubtask);
    }

    const removeTodo = (index) => {
        console.log(index)
        const newTodo = [...todoList];
        newTodo.splice(index, 1);
        setTodoList(newTodo);
    }


    return (
        <div>
            <Input type='text' placeholder='Please fill todo' value={inputTaskField} onChange={(e) => setInputTaskField(e.target.value)} />
            <Button type="primary" onClick={(e) => addTodo(e.target.value)}>+ Add</Button>
            <List
                size="small"
                bordered
                dataSource={todoList}
                renderItem={(todo, index) =>
                    <div key={todo.id}>
                        {todo.data[0].name}
                        <Button type='danger' onClick={() => removeTodo(index)} >Delete Task</Button>
                        <Button type='primary'>Edit Task</Button>
                        <Divider />
                        <Input type='text' placeholder='Please fill subtask' value={subTask} onChange={(e) => setSubTask(e.target.value, index)} />
                        <Button type='primary' onClick={(e) => addSubtask(e.target.value, index)}>Add Subtask</Button>
                        <List
                            size="small"
                            bordered
                            dataSource={subTask}
                            renderItem={(subtasks, index) =>
                                <div key={subtasks.id}>
                                    {subtasks.subTask}
                                    <Button type='danger'>Delete Subtask</Button>
                                    <Button type='primary'>Edit Subtask</Button>
                                </div>}
                        />
                    </div>}
            />
        </div>
    )
}

export default Todo
