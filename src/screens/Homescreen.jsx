import {
    Text,
    View,
    Image,
    ScrollView,
    TextInput,TouchableOpacity,
  } from 'react-native';
  import { data } from '../data';
  function Homescreen({navigation}) {
    // console.log(Data)
    return (
      <View className="ml-6 mr-2 bg-[#F5F5F8]">
        <ScrollView>
          <View className="flex  " >
            
            <Text>Hi,Doe</Text>
           <Text >let's grab your food!</Text>
          </View>
          <View>
            <TextInput
              placeholder="search for food"
              className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-2 p-[20px]"
            />
          </View>
          <View>
            <Text  className="mt-7 text-black  font-bold text-xl mb-4 ">Food Categories</Text>
          </View>
          <View className=" flex flex-row justify-between">
            {
              data.map((data)=>{
                return(
  <TouchableOpacity onPress={()=>navigation.navigate("categoryScreen",{foodItems:data.foods})}>
                <View>
                <Image className=' w-10 h-10' source={data.categoryImage}/>
                  <Text >{data.categoryName}</Text>
                </View>
                </TouchableOpacity>
                )
              })
              }
       
          </View>
          <View>
            <Text className="mt-7 text-black  font-bold text-xl mb-4 ">Food For You</Text>
          </View>
          <View className='flex flex-row justify-around'>
          <View className="bg-white m-[23em]">
            <Image
              className="h-20 w-20"
              source={require('../../images/githeri.jpg')}
            />
            <Text>Githeri Curry</Text>
            <Text>20mins</Text>
            <Text>ksh 300</Text>
          </View>
          <View className="bg-white m-[23em]">
            <Image className='h-20 w-20' source={require('../../images/african-pilau.jpg')} />
            <Text>Beef pilau</Text>
            <Text>20mins</Text>
            <Text>Ksh 300</Text>
          </View>
          </View>
        </ScrollView>
      </View>
    );
  }

export default Homescreen;  