import React from 'react';
import Column from '../column'

const Row = ({ children, ...props }) => {
    return (
        <Column height={'100%'} {...props}>
            {children}
        </Column>
    );
}

export default Row