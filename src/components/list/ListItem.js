 import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import styles from './styles'
import Icon from './Icon'

const ListItem = ({onPress, customIcon = null, text, rowStyle, selected, checkmark, iconBackground}) => {
		return(
			<TouchableHighlight
				onPress={onPress}
				underlayColor={styles.$underlayColor}
			>
				<View style={styles.rowStyle}>
			   	<Text style={styles.textStyle}>{text}</Text>
			   	{ 
			   		selected 
			   		   ?  <Icon visible={selected} checkmark={checkmark} iconBackground={iconBackground}/> 
			   			:  <Icon /> 
			   	}
			   	{customIcon}
			   </View>
			</TouchableHighlight>
		)
}

export default ListItem