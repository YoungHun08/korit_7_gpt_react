import { useState } from "react";

/*
    useState 상태관리
*/

function App2() {
    const [ num, setNum ] = useState(0);

    let number = 0;

    const handleIncreaseClick = () => {
        setNum(num + 1);
    }

    const handleDecreaseClick = () => {
        setNum(num - 1);
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseClick}>1증가</button>
        <button onClick={handleDecreaseClick}>1감소</button>
    </>
}

export default App2;