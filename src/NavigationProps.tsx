import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
};

type SplashScreenRouteProp = RouteProp<RootStackParamList, "Splash">;

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

type HomecreenRouteProp = RouteProp<RootStackParamList, "Home">;

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type SplashProps = {
  route: SplashScreenRouteProp;
  navigation: SplashScreenNavigationProp;
};

type HomeProps = {
  route: HomecreenRouteProp;
  navigation: HomeNavigationProp;
};

export { SplashProps, HomeProps };
