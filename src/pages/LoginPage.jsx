import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage=({setIsLoggedIn})=>{
    const[formData, setFormData]=useState({username:"" ,password:""})

    const navigate=useNavigate();

    const changeHandler=(event)=>{
        setFormData((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value

            }
        ))

    }

    
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
       
        console.log("Final Data after user login:")
        console.log(formData)

        navigate("/");

    }


    return(
        <div>
            <div>
                <h1>Login Page</h1>
            </div>
            <form onSubmit={submitHandler}>
                <label>
                    <p>User Name</p>
                    <input
                     required
                     placeholder="Enter username"
                     type="text"
                     value={formData.username}
                     onChange={changeHandler}
                     name="username"
                    ></input>
                </label>

                <label>
                    <p>Password</p>
                    <input
                     required
                     type="password"
                     placeholder="Enter Password"
                     value={formData.password}
                     onChange={changeHandler}
                     name="password"
                     
                    ></input>
                </label>

                <button >
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LoginPage;