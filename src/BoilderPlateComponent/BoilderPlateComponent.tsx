import React from 'react'

import { BoilerPlateComponentProps } from './BoilderPlateComponent.types'

import './boilderPlateComponent.scss'

const BoilerPlateComponent: React.FC<BoilerPlateComponentProps> = ({ theme = 'primary', text = 'default text' }) => {
    return (
        <div
            className={`bcp bcp-${theme}`}
        >
            {text}
        </div>
    )
}

export default BoilerPlateComponent