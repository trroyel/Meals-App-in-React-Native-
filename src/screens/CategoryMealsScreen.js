import React from 'react';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../store/data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList
            listData={displayedMeals}
            navigation={props.navigation} />
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedItem = CATEGORIES.find(item => item.id === catId);

    return {
        headerTitle: selectedItem.title,
    }
}

export default CategoryMealsScreen;