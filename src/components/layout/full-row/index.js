import React from 'react';
import { View } from 'react-native';

const Row = ({ children }) => {
    return (
        <View style={styles.rowStyle}>
            {children}
        </View>
    );
}

const styles = {
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%'
    },
};

export default Row