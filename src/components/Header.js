import React from 'react'

export default function Header() {
    const reload = () => {
        window.location.reload();
    }
    return (
        <header>
            <h1 className="text-center m-4 cursor" onClick={reload}>WebBox</h1>
        </header>
    )
}
