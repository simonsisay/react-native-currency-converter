import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import  {Home, CurrencyList, Options,Themes} from './screens'


const HomeStack = createStackNavigator({
	Home:{
		screen:Home,
		navigationOptions:{
			header:() => null,
			headerTitle:'Home'
		}
	},
	Options:{
		screen:Options,
		navigationOptions:{
			headerTitle:'Options'
		}
	},
	Themes:{
		screen:Themes,
		navigationOptions:{
			headerTitle:'Themes'
		}
	}
})

export default createStackNavigator(
{
	Home:{
		screen:HomeStack,
		navigationOptions:{
			header:() => null
		}
	},
	CurrencyList:{
		screen:CurrencyList,
		navigationOptions:({navigation}) => ({
			headerTitle:navigation.state.params.title
		})
	}
},
{
	mode:'modal',
	cardStyle:{
		paddingTop:StatusBar.currentHeight
	},
	headerMode:'screen'
 }
)