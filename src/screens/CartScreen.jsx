import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useState} from 'react';
import {StateContext} from '../context/state';
import {useContext} from 'react';
function Cartscreen() {
  const {cart, setCart} = useContext(StateContext);
  const {subTotal,setSubTotal}=useContext(StateContext)

  console.log(cart)
  setSubTotal(()=>{
    return cart.reduce((total,item)=>total+price*quantity,0)
  })
  const removeCartItems=(id)=>{
    setCart((prevCart)=>prevCart.filter(item=>item.id!==id))
  }
  const incrementQuantity = id => {
  setCart((prevCart)=>{
    prevCart.map(item=>
        item.id===id?{...item,quantity:item.quantity+1}:item
    )
  })
  };
  const decrementQuantity = () => {
    setCart((prevCart)=>{
        prevCart.map(item=>
            item.id===id?{...item,quantity:item.quantity>1?item.quantity-1:1}:item
        )
      })
  };
  return (
    <ScrollView>
      <View>
        {cart.map(foodItem => {
          return (
            <TouchableOpacity>
              <View className="flex flex-row justify-between items-center">
                <View>
                  <Image
                    source={foodItem.image}
                    className="w-[100px] h-10  bg-[#F0F0F0] rounded-full p-20"
                  />
                </View>
                {console.log(cart)}
                <View className="flex flex-col justify-between shadow items-center">
                  <View>
                    <Text className="text-black text-2xl font-semibold">
                      {foodItem.foodName}
                    </Text>
                    <Text className="text-[#FF7356] text-2xl">
                      {`Ksh ${foodItem.price}`}
                    </Text>
                  </View>
                  <View className="flex flex-row justify-between gap-5 items-center">
                    <TouchableOpacity onPress={decrementQuantity}>
                      <Text className="bg-[#FF7356] text-white text-3xl p-3 rounded-full">
                        --
                      </Text>
                    </TouchableOpacity>
                    <Text className="text-[#FF7356] text-2xl">
                      {foodItem.quantity}
                    </Text>
                    <TouchableOpacity onPress={()=>incrementQuantity(foodItem.id)}>
                      <Text className="bg-[#FF7356] text-white text-3xl p-3 rounded-full">
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <View className="flex felx-row justify-between text-center">
          <Text className="text-black text-1xl">Total Amount</Text>
          <Text className="text-black text-1xl">KSh 4,100</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text className="font-bold text-white text-center text-[30px] py-8 mx-6 bg-[#FF7356] rounded-full my-6">
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default Cartscreen;









