import React, { useState } from 'react';

function Signup({ userList, setUserList }) {
    const [ signupInputValue, SetSignupInputValue ] = useState({
        username : "",
        password : "",
        name : "",
        email : "",
    });

    const handlesignupInputValueOnChange = (e) => {
        SetSignupInputValue ({
            ...signupInputValue,
            [e.target.name] : e.target.value,
        });
    }

    const [ SigninInputValue, setSigninInputValue ] = useState({
        username : "",
        password : "",
    });

    const handleSignupButtonOnClick = () => {
        setUserList([
            ...userList,
            signupInputValue,
        ]);
        alert("가입완료");
        SetSignupInputValue({
            username : "",
            password : "",
            name : "",
            email : "",
        });
    }

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name='username'  placeholder='username'  value={signupInputValue.username} onChange={handlesignupInputValueOnChange}/>
            <input type="password" name='password' placeholder='password' value={signupInputValue.password} onChange={handlesignupInputValueOnChange}/>
            <input type="text" name='name' placeholder='name' value={signupInputValue.name} onChange={handlesignupInputValueOnChange}/>
            <input type="text" name='email' placeholder='email' value={signupInputValue.email} onChange={handlesignupInputValueOnChange}/>
            <div>
            <button onClick={handleSignupButtonOnClick}>가입하기</button>
            </div>
        </div>
    )
};

export default Signup;