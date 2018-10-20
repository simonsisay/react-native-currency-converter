import React, { Component } from 'react'
import { ListItem } from '../components/list'
import { View, ScrollView, StatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'



const styles = EStyleSheet.create({
	$blue:'$primaryBlue',
	$green:'$primaryGreen',
	$orange:'$primaryOrange',
	$purple:'$primaryPurple'
})


class Themes extends Component{

	handleThemePress = (color) => {
		this.props.navigation.goBack(null)
	}




	render(){
		return(
			<View style={{flex:1}}>
				<ScrollView>
					<StatusBar barStyle="default" translucent={false} />
					<ListItem
						text="Blue"
						onPress={() => this.handleThemePress('blue')}
						selected
						checkmark={false}
						iconBackground={styles.$blue}
					/>
					<ListItem
						text="Green"
						onPress={() => this.handleThemePress('green')}
						selected
						checkmark={false}
	               iconBackground={styles.$green}
					/>
					<ListItem
						text="Orange"
						onPress={() => this.handleThemePress('orange')}
						selected
						checkmark={false}
						iconBackground={styles.$orange}
					/>
					<ListItem
						text="Purple"
						onPress={() => this.handleThemePress('purple')}
						selected
						checkmark={false}
		            iconBackground={styles.$purple}
					/>
				</ScrollView>
			</View>
		)
	}
}

export default Themes