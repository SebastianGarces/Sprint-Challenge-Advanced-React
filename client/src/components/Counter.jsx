import React, { useState, useEffect, useRef } from "react";

const useLocalStorage = (initialState, key) => {
    const get = () => {
        const storage = localStorage.getItem(key);
        if (storage) return JSON.parse(storage).value;
        return initialState;
    };

    const [value, setValue] = useState(get());

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }));
    }, [value]);

    return [value, setValue];
};

const Counter = ({ player: { searches, name }, setSearches }) => {
    // const [count, setCount] = useLocalStorage(searches, `${name}`);
    const [count, setCount] = useState(searches);

    const increment = () => {
        setCount(c => c + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };

    useEffect(() => {
        setSearches(count);
    }, [count]);

    return (
        <div className="Counter">
            <section className="controls">
                <p data-testid="count">{count}</p>
                <button onClick={increment} data-testid="increment">
                    +
                </button>
                <button onClick={decrement} data-testid="decrement">
                    -
                </button>
                <button onClick={reset} data-testid="reset">
                    Reset
                </button>
            </section>
        </div>
    );
};

export default Counter;
