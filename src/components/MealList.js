import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from './MealItem';

const MealList = props => {
    const renderMealItems = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl={itemData.item.imageUrl}
                onSlectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }} />
        );
    };


    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={item => item.id}
                data={props.listData}
                renderItem={renderMealItems}
                style={{ width: '100%' }} />
        </View>
    );
};
const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    }
});
export default MealList;