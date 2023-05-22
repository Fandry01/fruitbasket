import React from 'react';

function Button({clickHandler, typeHandler, children, clickDisabled}) {
    return (
        <button type={typeHandler} onClick={clickHandler} disabled={clickDisabled}>
            {children}
        </button>
    );
}

export default Button;