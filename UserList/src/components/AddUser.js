import { useNavigate } from 'react-router-dom'
import '../style/addUser.css'
import { useState } from 'react'
import { ADD_USER } from '../graphQL/mutation'
import { useMutation } from '@apollo/client'


const AddUser = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }
    const [createUser] = useMutation(ADD_USER)

    const handleAddSubmit = () => {
        if (name && email && phone) {
            createUser({
                variables: { name, email, phone }
            })

            setMessage(`${name} added Successfully`)
        }
        else {
            setError('Please provide all the details')
        }

    }


    return (
        <div className='addUser'>

            <h1><u>Add User</u></h1>

            <div className='form'>
                <form>
                    <div className='field'>
                        <label>Name: </label>
                        <input required={true} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='field'>
                        <label>Email: </label>
                        <input required={true} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='field'>
                        <label>Phone: </label>
                        <input required={true} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className='field'>
                        <button type='submit' onClick={handleAddSubmit} >Add User</button>
                        <button onClick={handleNavigate}>User List</button>
                    </div>
                    <p>{error}</p>
                    <p id='msg'>{message}</p>
                </form>
            </div>

        </div>
    )
}

export default AddUser