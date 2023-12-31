import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../asyncActions/users"



function Employee(){

    const employee = useSelector(store => store.employee)
    const dispatch = useDispatch()
    
    return(
        <div>
            <h1>Employee</h1>
            <div>
                <button onClick={() => dispatch(fetchUser(prompt()))}> async Подтянуить значение по ID</button>
            </div>
            <div>
                <h3>{employee.name}</h3>
                <p>{employee.phone}</p>
                <p>{employee.email}</p>
                <p>{employee.company?.name}</p>
            </div>
        </div>
    )
}

export default Employee
