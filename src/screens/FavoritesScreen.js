import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Name = props => {
    return (
        <View style={styles.screen}>
            <Text> This is FavoritesScreen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Name;