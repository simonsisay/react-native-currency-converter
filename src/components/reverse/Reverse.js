import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from './styles'


const Reverse = (props) => {
	return(
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<Image 
				resizeMode="contain"
				source={require('./images/icon.png')} 
				style={styles.image} />
			<Text style={styles.text}>{props.text}</Text>
		</TouchableOpacity>
	)
}

export default Reverse