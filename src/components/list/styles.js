import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
		$undelayColor:'#DDDDDD',
		rowStyle:{
			paddingVertical:20,
			paddingHorizontal:10 ,
			borderBottomWidth:1,
			borderBottomColor:"#DDDDDD", 
			flexDirection:'row',
			justifyContent:'space-between',
			alignItems:'center',
			backgroundColor:'white',
		},
		textStyle:{
			fontSize:18,
			color:'$darkText',
			paddingHorizontal:10
		},

		icon:{
			height:30,
			width:30,
			backgroundColor:'transparent',
			borderRadius:15,
			justifyContent:'center',
			alignItems:'center'
		},
		iconVisible:{
			backgroundColor:'$primaryBlue',
			height:30,
			width:30
		},
		checkIcon:{
			width:18,
		}
})