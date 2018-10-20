import React, { Component } from 'react'
import { View, Text,TouchableOpacity, TextInput } from 'react-native'
import propTypes from 'prop-types'
import styles from './styles'


const InputWithButton = ({value, editable = true, buttonText, onPress, defaultValue, onChangeText}) => {

		return(
			<View style={styles.inputContainer}>
				<TouchableOpacity onPress={onPress}>
					<Text style={styles.button}> 
						{buttonText}
					</Text>
				</TouchableOpacity>
				<TextInput 
					undeLineColorAndroid="transparent"
					style={editable ? styles.field : styles.disabled}
					defaultValue={defaultValue}
					editable={editable}
					keyboardType={"numeric"}
					onChangeText={text => onChangeText(text)}
					value={value}
				/>
			</View>
		)
} 


InputWithButton.propTypes = {
	editable:propTypes.bool,
	placeholder:propTypes.string,
	onPress:propTypes.func
}


export default InputWithButton