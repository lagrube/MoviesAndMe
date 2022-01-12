import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = (props) => {

    const styles = StyleSheet.create({
        header:{
            height:100,
            justifyContent: 'center',
            backgroundColor: 'gray',
        },
        textHeader:{
            textAlign: 'center',
            color: 'white',
            fontSize:20,    
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
        }
    })

    return (
        <View style={styles.header}>
            {
                props.isConnected ?
                    <Icon
                        name='logout'
                        color='#00aced'
                        size={30}
                        onPress={()=>props.setisConnected(false)}
                    />
                :
                    <Text style={styles.textHeader}>
                        En attente de connexion...
                    </Text>
            }
            
        </View>
    );
};

export default Header;