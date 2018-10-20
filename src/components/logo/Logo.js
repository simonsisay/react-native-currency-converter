import React, { Component } from 'react'
import styles from './styles'
import { View, Text, Keyboard, Animated, ImageBackground, Platform} from 'react-native'


class Logo extends Component{
	constructor(props){
		super(props);

			this.containerSize =  new Animated.Value(styles.$largeContainerSize),
			this.imageSize 	  =  new Animated.Value(styles.$largeImageSize)
	}

	componentDidMount(){
		let keyboardShow = "keyboardWillShow";
		let keyboardHide = "keyboardWillHide";

		if(Platform.OS === 'andriod'){
			let keyboardShow = "keyboardDidShow";
			let keyboardHide = "keyboardDidHide";
		}

		this.keyboardShowListener = Keyboard.addListener(keyboardShow, this.showKeyboard)
		this.keyboardHideListener = Keyboard.addListener(keyboardHide, this.hideKeyboard)
	}

	componentWillUnMount(){
		this.keyboardShowListener.remove();
		this.keyboardHideListener.remove();
	}

	showKeyboard = () => {
		Animated.parallel([
			Animated.timing(this.containerSize, {
				toValue:styles.$smallContainerSize,
				duration:250
			}),
			Animated.timing(this.imageSize, {
				toValue:styles.$smallImageSize,
				duration:250
			})
		]).start()
	}

	hideKeyboard = () => {
		Animated.parallel([
			Animated.timing(this.containerSize, {
				toValue:styles.$largeContainerSize,
				duration:250
			}),
			Animated.timing(this.imageSize, {
				toValue:styles.$largeImageSize,
				duration:250
			})
		]).start()
	}


	render(){

		const containerStyle = [
			styles.logoImage, 
			{width:this.containerSize, height:this.containerSize}
		]

		const imageStyle = [
			styles.logoNestedImage,
			{width:this.imageSize}
		]

		return(
			<View style={styles.logoContainer}>
				   <Animated.View style={containerStyle}>
						 <ImageBackground
						 		resizeMode="contain" 
						 		source={require('./images/background.png')}
						 		style={styles.backgroundImage}
						 	>
						     <Animated.Image 
						     		resizeMode="contain"
							     	source={require('./images/logo.png')} 
							     	style={imageStyle}
						     />
						 </ImageBackground>
					</Animated.View>
				 <Text style={styles.logoText}>Currency Converter</Text>
			</View>
		)
	}
}

export default Logo