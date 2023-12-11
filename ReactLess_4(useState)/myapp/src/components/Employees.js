import { useState } from "react"




function Employees(){

    let data = [
        {id: 1, name:  'Alex', salary: 1000},
        {id: 2, name:  'Steven', salary: 400},
        {id: 3, name:  'John', salary: 9000},
        {id: 4, name:  'Neena', salary: 2000},
        {id: 5, name:  'Lorem', salary: 700},
    ]

    const [users, setUsers] = useState(data)

    function delLatUser(){
        // Вариант 1 (принудительное создание копии)
        // let copyUser = [...users]
        // copyUser.pop()
        // setUsers(copyUser)

        // Вариант 2 (метод, возвращающий копию измененного массива)
        setUsers(users.slice(0,-1))

        // Вариант 3 (решение через filter)
        // setUsers(users.filter((_, ind) => ind !== users.length - 1))

        // Так работать не будет, поскольку исходный стейт менять нельзя
        // users.pop()
        // setUsers(users)

    }

    function delFirstUser(){
        setUsers(users.slice(1))
    }

    function addNewUser(){
        let [name, salary] = prompt().split(' ')
        let newUser = {
            id: Date.now(),
            name,
            salary: +salary
        }
        setUsers([...users, newUser])
    }

    function changeSalary(id){
        let changedEmployees = users.map(elem => {
            if (elem.id === id){
                elem.salary = 0
            }
            return elem
        })
        setUsers(changedEmployees)
    }

    // Создайте новую кнопку, которая будет сортировать сотрудников по зарплате (возрастанию)

    function sortUsers(){
        let copyUsers = [...users]
        copyUsers.sort((a,b) => a.salary - b.salary)
        setUsers(copyUsers)
    }

    return(
        <div>
            <h1>Сотрудники</h1>
            <div>
                <button onClick={() => delLatUser()}>Delete last user</button>
                <button onClick={() => delFirstUser()}>Delete first user</button>
                <button onClick={() => addNewUser()}>Add new user</button>
                <button onClick={() => sortUsers()}>Sort users</button>
            </div>
            <div>
                {users.map(elem => 
                    <div 
                        key={elem.id}
                        onClick={() => changeSalary(elem.id)}
                    >
                        <h3>{elem.name}</h3>
                        <p>{elem.salary}</p>
                    </div>    
                )}
            </div>
        </div>
    )
}


export default Employees