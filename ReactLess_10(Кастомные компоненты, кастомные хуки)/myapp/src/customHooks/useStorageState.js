import { useEffect, useState } from "react";

function useStorageState(defaultState, key){

    let loadData = JSON.parse(localStorage.getItem(key)) ?? defaultState

    let [value, setValue] = useState(loadData)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export {useStorageState}