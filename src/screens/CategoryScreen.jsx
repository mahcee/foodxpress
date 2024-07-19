import {Image, Text, TouchableOpacity, View} from 'react-native';

function CategoryScreen({route, navigation}) {
  const {foods} = route.params;
  console.log(foods);
  return (
    <View>
      {
      foods.map(item => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleFoodItem', {foods: item})
            }>
            <View>
              <Text className="font-sans font-bold">{item.foodName}</Text>
              <Text>{item.description}</Text>
              <Image className="h-20 w-20" source={item.image} />
              <Text className="text-[#FF7356] text-xl">{item.price}</Text>
            </View>
          </TouchableOpacity>
        )

      })
      }
    </View>
  );
}
export default CategoryScreen;
