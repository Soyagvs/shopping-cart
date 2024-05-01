import React from 'react'
import { db } from "../../data/db"
import { Guitarras } from '../Guitarras/Guitarras'
import { useState } from 'react'

export const Main = () => {
    //useState
    const [data, setData] = useState(db)

    return (

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitarras
                        key={guitar.id}
                        guitar={guitar}
                    />
                ))}
            </div>
        </main>
    )
}
