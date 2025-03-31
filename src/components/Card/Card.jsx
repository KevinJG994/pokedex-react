import React from 'react'

export default function Card() {
    return (
        <div className="card bg-base-100 w-96 shadow-lg">
            <figure>
                <img
                    src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
                    alt="Pokemon-image"
                    className='w-48' />
            </figure>
            <div className="card-body">
                <p className='flex justify-center text-xl'>#001</p>
                <h2 className="card-title justify-center text-2xl">
                    Nombre
                </h2>
                <div className="card-actions justify-center my-4">
                    <div className="badge badge-primary">Type</div>
                    <div className="badge badge-secondary">Type</div>
                </div>
            </div>
        </div>
    )
}
