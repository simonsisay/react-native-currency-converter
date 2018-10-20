import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const imageWidth = Dimensions.get('window').width/2  

export default EStyleSheet.create({

	$largeContainerSize: imageWidth,
	$largeImageSize: imageWidth /1.7,
	$smallContainerSize: imageWidth /2,
	$smallImageSize: imageWidth / 4,

	logoContainer:{
		justifyContent:'center',
		alignItems:'center'
	},
	logoText:{
		color:'$white',
		fontSize:25,
		fontWeight:'bold',
		letterSpacing:0.6,
		paddingTop:10 
	},
	logoNestedImage:{
		width:"$largeImageSize", 
	},
	logoImage:{
		width:"$largeContainerSize",
	},
	backgroundImage:{
		alignItems:'center',
		justifyContent:'center',
		flex:1,
	}
})