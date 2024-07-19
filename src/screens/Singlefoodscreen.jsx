import {View, Text, Image} from 'react-native';
import {data} from '../data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useContext, useState} from 'react';
import {StateContext} from '../context/state';
function Singlefoodscreen({route, navigation}) {
  const {foods} = route.params;
  console.log(foods);
  const {cart, setCart} = useContext(StateContext);
  const addToCart = foodItems => {
    const foodWithQuantity={...foodItems,quantity}
    setCart((prevCart));
    const existingItemIndex=prevCart.findIndex((foodItem)=>foodItem.id===foodItem.id)
    if(existingItemIndex!==1){
      updatedCart=[prevCart]
      updatedCart[existingItemIndex].quantity+=quantity
      return updatedCart
    }
  };
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity - 1);
    }
  };

  return (
  
    <View>
      <View className="relative">
        <Image
          source={require('../../images/african-pilau.jpg')}
          className="w-[500px] h-50 "
        />
      </View>
      <View className="absolute r-[20%]">
        <Image source={foods.image} className="absolute w-50" />
      </View>
      <View className="">
        <Text className="text-black text-3xl text-center font-bold mt-36">
          {foods.foodName}
        </Text>
        <TouchableOpacity>
          {' '}
          <View className="flex flex-row justify-between shadow items-center">
            <View>
              <Text className="text-[#FF7356] text-2xl">KSh 1,299</Text>
            </View>
            <View className="flex flex-row justify-between gap-5 items-center">
              <TouchableOpacity onPress={decrementQuantity}>
                <Text className="bg-[#FF7356] text-white text-3xl p-3 rounded-full">
                  --
                </Text>
              </TouchableOpacity>
              <Text className="text-[#FF7356] text-2xl">{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity}>
                <Text className="bg-[#FF7356] text-white text-3xl p-3 rounded-full">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
          <View>
            <Text>{foods.description}</Text>
        <TouchableOpacity  onPress={() =>
              navigation.navigate(()=>addToCart(foods))
            }>
            <Text className="font-bold text-white text-center text-[30px] py-8 mx-6 bg-[#FF7356] rounded-full">
              Add to Cart
            </Text>
        </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
export default Singlefoodscreen;
