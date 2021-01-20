import React from 'react'
import { News } from '../../components/news/News'
import { Signup } from '../../components/signup/Signup'
import { Slider } from '../../components/slider/Slider'

export function Frontpage(){

    // Forsiden skal indeholde
    // Slider
    // Nyheds-sektion med tre billeder
    // Tilmeld nyhedsbrev
    // Nyeste bagværk

    // Returner Slider komponentet
    return (
        <>  
            <Slider/>
            <News/>
            <Signup/>
        </>
    )
}