import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            style={{ width: '100%'}}
                            source={{ uri: props.imageUrl }} />
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity.toString()}</Text>
                        <Text>{props.affordability.toString()}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        marginVertical: 15
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default MealItem;