import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'



export default EStyleSheet.create({
	button:{
		color:'grey',
		backgroundColor:'white',
		padding:15,
		fontWeight:"bold",
		borderRightWidth:1
	},
	field:{
		backgroundColor:'#ECEFF4',
		padding:15,
		width:'70%',
		color:"black"
	},
	disabled:{
		backgroundColor:'#e5e5e5',
		padding:15,
		width:'70%',
		color:"#797979"
	},
	inputContainer:{
		marginTop:10,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row',
		borderRadius:5,
	}
})