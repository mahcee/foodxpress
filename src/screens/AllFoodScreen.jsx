import {View, Image, Text, TouchableOpacity} from 'react-native';
import {data} from '../data';
function AllFood() {
  const allfoods = data.reduce((acc, curr) => {
    return acc.concat(curr.foods);
  }, []);
  console.log(allfoods);
  return (
    <View>
      {allfoods.map(item => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleFoodItem', {foodItem: item})
            }>
            <View>
              <Text className="font-sans font-bold">{item.foodName}</Text>
              <Text>{item.description}</Text>
              <Image className="h-20 w-20" source={item.image} />
              <Text className="text-[#FF7356] text-xl">{item.price}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default AllFood;
