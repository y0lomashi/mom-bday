import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Image, Text, Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => {
    const imageUrl = "./assets/photo.jpg";
    const title = "Happy Birthday Mom! 🎉";
    const backgroundUrl =
        "https://verderamade.com/wp-content/uploads/2021/08/1500x2500-phone-sunflowergold.jpg";

    return (
        <ImageBackground
            source={{ uri: backgroundUrl }}
            style={styles.container}
        >
            <View style={styles.content}>
                <Image
                    source={require(imageUrl)}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text h2 style={styles.title}>
                    {title}
                </Text>
                <Button
                    title="Click Me!"
                    onPress={() => navigation.navigate("Details")}
                />
            </View>
        </ImageBackground>
    );
};



const DetailsScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFF00",
            }}
        >
            <Text h3 style={styles.title}>Thank you for supporting me through everything!</Text>
            <Text h4 style={styles.subtitle}>Love, your son ❤️</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFF00",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 400,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 20,
    },
});

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    cardStyleInterpolator: ({ current }) => ({
                        cardStyle: {
                            transform: [
                                {
                                    scale: current.progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.9, 1],
                                    }),
                                },
                            ],
                            opacity: current.progress,
                        },
                    }),
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
