import React from 'react'
import {View, TouchableOpacity, Image } from 'react-native'
import styles from './styles'


const Header = ({onPress}) => {
	return(
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} >	
				<Image resizeMode="contain" source={require('./images/gear.png')} style={styles.icon}/>
			</TouchableOpacity>
		</View>
	)
}

export default Header