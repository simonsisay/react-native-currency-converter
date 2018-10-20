import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native'


export default EStyleSheet.create({
	container:{
		position:'absolute',
		top:0,
		left:0,
		right:0,
		bottom:0,
		width:'100%',
		marginTop:0,
		alignItems:'flex-end',
		justifyContent:'flex-start',
		'@media ios':{
			paddingTop:25
		},
		'@media android':{
			paddingTop:StatusBar.currentHeight
		}
	},
	icon:{
		width:22,
		height:22,
		marginRight:18,
	}
})