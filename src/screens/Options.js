import React, { Component } from 'react'
import {Linking, View, StatusBar, Text, ScrollView, Platform } from 'react-native'
import { ListItem } from '../components/list'
import { Ionicons } from '@expo/vector-icons'
import { connectAlert } from '../components/alert'



const ICON_COLOR = '#8D8D8D'
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'android' ? 'md' : 'ios'


class Options extends Component{

	handleThemePress = () => {
		this.props.navigation.navigate('Themes')
	}

	handleFixerPress = () => {
		Linking.openURL('htasasdtp://fixer.io')
		.catch(() => {
			this.props.alertWithType('error', 'Sorry!', 'Fixer.io cant be opened')
		});
	}


	render(){
		return(
			<View style={{flex:1 }}>
				<ScrollView>
					<StatusBar translucent={false} barStyle="default" />
					<ListItem 
						text="Themes"
						onPress={this.handleThemePress}
						customIcon={
							<Ionicons 
								name={`${ICON_PREFIX}-arrow-forward`}
								color={ICON_COLOR}
								size={ICON_SIZE}
							/>
						}
					/>
					<ListItem 
						text="Fixer.io"
						onPress={this.handleFixerPress}
						customIcon={ 
						 <Ionicons
							name={`${ICON_PREFIX}-link`}
							color={ICON_COLOR}
							size={ICON_SIZE}
						  />
						}
					/>
				</ScrollView>
			</View>
		)
	}
}

export default connectAlert(Options)