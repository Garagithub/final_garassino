import { View, Button } from "react-native";
 
export default function Home({navigation}) {
    return(
        <View>
            <Button onPress={() => navigation.navigate({ name: 'Login' })} title='ir a login'/>
        </View>
    );
}