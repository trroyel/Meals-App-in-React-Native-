import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
   return (
      <View style={styles.screen}>
         <Text> Hello from MealDetailsScreen </Text>
         <Button
            title="Go back to Category Meals Screen"
            onPress={() => props.navigation.navigate('CategoryMeals')} />

         <Button
            title="Go back to Category Screen"
            onPress={() => props.navigation.popToTop('CategoryMeals')} />
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

export default MealDetailScreen;