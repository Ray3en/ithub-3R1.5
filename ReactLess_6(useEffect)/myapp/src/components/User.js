import { useEffect, useState } from "react"


function User(){
    // Задание 1.
    // Реализуйте удаление пользователя по двойному нажатию

    const [users, setUsers] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('users') || localStorage.getItem('users') === '[]'){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUsers(data))
        } else {
            let data = JSON.parse(localStorage.getItem('users'))
            setUsers(data)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    function deleteById(id){
        let deletedUser = users.filter(elem => elem.id !== id)
        setUsers(deletedUser)
    }

    function remLastUser(){
        let deletedUser = users.slice(0, users.length - 1)
        setUsers(deletedUser)
    }

    return(
        <div>
            <h2>Users</h2>
            <button onClick={() => remLastUser()}>Remove last user</button>
            {users.map(elem => 
            <p 
                key={elem.id}
                onDoubleClick={() => deleteById(elem.id)}
            >
                {elem.name}
            </p>)}
        </div>
    )
}

export default User

// создайте компонент Todos, который будет формировать массив
// используя сетевой запрос.
// https://jsonplaceholder.typicode.com/todos
// На разметке сфомриуйте миркированый ul список с li элементами
// каждый li элемент должен содержать заголовок задачи (todo)