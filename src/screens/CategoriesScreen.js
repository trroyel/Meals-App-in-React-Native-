import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../store/data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

    const { navigate } = props.navigation;

    const renderGridItem = itemData => {
        return <CategoryGridTile
            title={itemData.item.title}
            color = {itemData.item.color}
            onSelect={() => {
                navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                });
            }} />
    };

    return (
        <FlatList
            keyExtractor={(item => item.id)}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    );
};

//We can set it in MealsNavigation
// CategoriesScreen.navigationOptions = {
//     //headerTitle: "Meals Category",
// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;