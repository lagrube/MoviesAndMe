import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = () => {
    const styles=StyleSheet.create({
        footer:{
            height:"10%",
            justifyContent: 'center',
        }
    })
    return (
        <View style={styles.footer}>
        </View>
    );
};

export default Footer;