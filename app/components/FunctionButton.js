import React from 'react'

const DoSomethingButton = ({ func, item, text }) => {
    return (
        <button onClick={(event) => func(item, event)}>
            {text}
        </button>
    )
}

export default DoSomethingButton