import React from 'react';
import { View } from 'react-native';
import Search from "../components/Search";
import Footer from './Footer';
import Log from './Log';

const Home = () => {
    return (
        <View>
            <Log/>
            <Footer/>
        </View>
    );
};

export default Home;