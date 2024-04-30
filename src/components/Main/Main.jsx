import React from 'react'
import { Guitarras } from '../Guitarras/Guitarras'

export const Main = () => {
    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
               <Guitarras/>
            </div>
        </main>
    )
}
