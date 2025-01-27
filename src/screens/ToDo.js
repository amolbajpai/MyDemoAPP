import React, { useMemo } from 'react'

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for(let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

function ToDo() {
    const [count, setCount] = React.useState(0);
    const [todos, setTodos] = React.useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);


    const incriment = () => {
        setCount(count + 1);
    }

    const addTodo = () => {
        setTodos((t) => [...todos, "New Todo"]);
    }
    

  return (
    <div>
        <div>
        <h2>ToDo</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        }) }
        <button onClick={() => {addTodo()}}>Add Todo</button>
        </div>
        <hr />
        <div>   
            Count: {count}
            <button onClick={incriment}>Increment</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </div>
    </div>

  );
}

export default ToDo