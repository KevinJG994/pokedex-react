import React from 'react'

export default function NAvbar() {
    return (
        <div className="navbar bg-(--red-primary) text-primary-content">
            <img src="/assets/Pokeball.png" alt="" className='w-16' />
            <button className="btn btn-ghost text-xl text-gray-50">Pokédex</button>
        </div>
    )
}
