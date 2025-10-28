import { useState } from 'react'


export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        try {
            const raw = localStorage.getItem(key)
            return raw ? JSON.parse(raw) : initialValue
        } catch (e) {
            return initialValue
        }
    })


    const setLocal = val => {
        try {
            const valueToStore = typeof val === 'function' ? val(state) : val
            setState(valueToStore)
            localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (e) {
            console.error('localStorage error', e)
        }
    }


    return [state, setLocal]
}