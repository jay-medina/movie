import React, { useState, useEffect } from "react";

export function App(): JSX.Element {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Page has been open for <code>{count}</code> seconds.
                </p>
            </header>
        </div>
    );
}
