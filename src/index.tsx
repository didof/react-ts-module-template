import React from 'react'

const BoilerPlateComponent: React.FC<{ text: string }> = ({ text = 'Boilerplate'}) => {
    return (
        <div>
            {text}
        </div>
    )
}

export default BoilerPlateComponent
