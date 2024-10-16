import React from 'react';
import classNames from 'classnames';

export default function Button({ className, outline, onClick, children }) {
    return (
        <button
            className={classNames('button',  className, {
                'button--outline': outline,
            })}
            onClick={onClick}>
            {children}
        </button>
    );
}
