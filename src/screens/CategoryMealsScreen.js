import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../store/data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItems = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl={itemData.item.imageUrl} />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={item => item.id}
                data={displayedMeals}
                renderItem={renderMealItems}
                style={{ width: '100%' }} />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedItem = CATEGORIES.find(item => item.id === catId);

    return {
        headerTitle: selectedItem.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    }
});

export default CategoryMealsScreen;