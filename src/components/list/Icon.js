import React from 'react'
import { View, Image} from 'react-native'
import styles from './styles'

const Icon = ({checkmark, visible, iconBackground}) => {
	const iconStyle = [styles.icon]

	if(visible){
		iconStyle.push(styles.iconVisible)
	}

	if(iconBackground){
		iconStyle.push({backgroundColor:iconBackground})
	}


	return(
		<View style={iconStyle}>
		{checkmark ?
			<Image source={require('./images/check.png')} resizeMode="contain" style={styles.checkIcon}/>
		: ''
		}
		</View>
	)
}

export default Icon