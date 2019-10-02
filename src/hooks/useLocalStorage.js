import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredVale] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        window.localStorage.setitem(key, JSON.stringify(value));
        setStoredValue(value);
    }

    return [storedValue, setValue];
}