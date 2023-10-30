import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import FruitsAndVegetables from "./screens/FruitsAndVegetables";
import BakeryProducts from "./screens/BakeryProducts";
import GrainsAndProducts from "./screens/GrainsAndProducts";
import DairyProducts from "./screens/DairyProducts";
import NonVeg from "./screens/NonVeg";
import HerbsAndSpices from "./screens/HerbsAndSpices";
import Preservatives from "./screens/Preservatives";

  const Stack = createStackNavigator();
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FruitAndVegetables" component={FruitsAndVegetables} />
          <Stack.Screen name="BakeryProducts" component={BakeryProducts} />
          <Stack.Screen name="GrainsAndProducts" component={GrainsAndProducts} />
          <Stack.Screen name="DairyProducts" component={DairyProducts} />
          <Stack.Screen name="NonVeg" component={NonVeg} />
          <Stack.Screen name="HerbsAndSpices" component={HerbsAndSpices} />
          <Stack.Screen name="Preservatives" component={Preservatives} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;
  