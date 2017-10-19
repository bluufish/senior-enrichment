import React from 'react'

const DoSomethingButton = ({ func, item, text }) => {
    return (
        <button onClick={() => func(item)}>
            {text}
        </button>
    )
}

export default DoSomethingButton