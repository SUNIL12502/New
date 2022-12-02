import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup.jsx'
import { useNavigate } from "react-router-dom";

const Register = ()  => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();
    let navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await signup(firstName, lastName, email, password);
        // setFirstName('');
        // setLastName('');
        // setEmail('');
        // setPassword('');
        navigate("../home");
    }
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>First Name:</label>
            <input 
                type="text"
                onChange={(e) =>{setFirstName(e.target.value)}}
                value = {firstName}
            />

            <label>Last Name:</label>
            <input 
                type="text"
                onChange={(e) =>{setLastName(e.target.value)}}
                value = {lastName}
            />

            <label>Email:</label>
            <input 
                type="email"
                onChange={(e) =>{setEmail(e.target.value)}}
                value = {email}
            />

            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) =>{setPassword(e.target.value)}}
                value = {password}
            />

            <button disabled={isLoading}>Sign Up</button>

            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Register;