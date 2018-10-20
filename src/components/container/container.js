import React from 'react'
import propsTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const Container = ({children}) => {
	return(
		<View style={styles.container}>
			{children}
		</View>
	)
}

Container.propsTypes = {
	children: propsTypes.any,
}


export default Container
