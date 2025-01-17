import React, { useState } from 'react';

function Signin({ userList }) {

    const [ SigninInputValue, setSigninInputValue ] = useState({
        username : "",
        password : "",
    })
        
    const handleSigninButtonOnClick = () => {
        const foundUser = userList.find(user => user.username === SigninInputValue.username)
        if(!foundUser) {
            alert("사용자 정보를 다시 확인하세요.");
            return
        }
        if(foundUser.password !== SigninInputValue.password) {
            alert("사용자 정보를 다시 확인하세요.");
            return
        }
        alert(`${foundUser.name}(${foundUser.email})님 환영합니다.`);
    }

    const handlesignuInInputValueOnChange = (e) => {
        setSigninInputValue ({
            ...SigninInputValue,
            [e.target.name] : e.target.value,
        });
    }

    return (
        <div>
            <h1>로그인</h1>
            <input type="text" name='username' placeholder='username' onChanges={handlesignuInInputValueOnChange} value={SigninInputValue.username}/>
            <input type="password" name='password' placeholder='password' onChange={handlesignuInInputValueOnChange} value={SigninInputValue.password}/>
            <div>
                <button onClick={handleSigninButtonOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default Signin;