import { isTerminatorless, tsConstructorType } from '@babel/types'
import { render } from '@testing-library/react'
import React from 'react'
import GardenCard from '../components/GardenCard'

class AllGardens extends React.Component{
    constructor(){
        super()
        this.state = {gardens:[]}

    }
render(){
let gardens = this.state.gardens
return(
    <div>
        {gardens.map(garden=>
            <div>{GardenCard}<div/>)}
    </div>
)
        }
        }