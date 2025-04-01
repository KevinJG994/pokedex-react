import React from 'react'
import { Link } from 'react-router-dom'

export default function NAvbar() {
    return (
        <div className="navbar bg-(--red-primary) text-primary-content">
            <img src="/assets/Pokeball.png" alt="" className='w-16' />
            <Link to='/'>
                <button className="btn btn-ghost text-xl text-gray-50 hover:bg-(--red-primary)">Pokédex</button>
            </Link>
        </div>
    )
}
