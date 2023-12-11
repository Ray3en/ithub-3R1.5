import {useState} from 'react'
import Button from '../UI/Button/Button'
import { useStorageState } from '../../customHooks/useStorageState'

function Counter(){

    let data = ['Alex', 'Steven','Lex', 'Neena']

    const [count, setCount] = useStorageState(0, 'count')
    const [empl, setEmpl] = useStorageState(data, 'empl')

    return(
        <div>
            <div>
                <h2>{count}</h2>
                <Button 
                    title={'Increment!'}
                    theme={'green'}
                    onClick={() => setCount(count + 1)}
                />
            </div>
            <div>
                <Button 
                    title={'Remove empl!'}
                    theme={'black'}
                    onClick={() => setEmpl(empl.slice(1))}
                />
                <ul>
                    {empl.map(elem => <li>{elem}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Counter