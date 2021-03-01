import React from 'react';



const BackButton = () => {
    return (
        <button onClick={() => window.history.back()}>
            ->
        </button>
    )
}

export default BackButton;