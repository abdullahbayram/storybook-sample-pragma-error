import  StorybookUIRoot from './storybook';
import HomeScreen from "./screens/HomeScreen";
import {
  environment, STORYBOOK,
} from './constants/environment';

export default function App() {
  if(environment === STORYBOOK){
    return (
    <StorybookUIRoot />
    );
  }
  return (
    <HomeScreen/>
  );
}
