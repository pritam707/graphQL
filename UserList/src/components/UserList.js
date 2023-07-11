import { useNavigate } from 'react-router-dom'
import '../style/userList.css'
import { useQuery, useMutation } from '@apollo/client'
import USER_LIST from '../graphQL/query'
import { DELETE_USER } from '../graphQL/mutation'

const UserList = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/addUser')
    }


    let userList = [];
    const { data } = useQuery(USER_LIST)
    if (data) {
        userList = data.userList
    }

    const [deleteUser] = useMutation(DELETE_USER)
    const onDelete = (e) => {
        deleteUser({
            variables: { _id: e }
        })
        window.location.reload(true)
    }


    return (
        <div className="User">
            <h1><u>User List</u></h1>

            <div className='add'>
                <button onClick={handleNavigate}>Add User</button>
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    {userList.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><button onClick={() => onDelete(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default UserList