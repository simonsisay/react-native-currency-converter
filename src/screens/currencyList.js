import React, { Component } from 'react'
import { View, FlatList, StatusBar } from 'react-native'
import currencies from '../data/currencies'
import { ListItem } from '../components/list'


class CurrencyList extends Component{
	constructor(props){
		super(props);
		this.state = {
			selected:"USD",
		}
	}

	handlePress = (currency) => {
		this.props.navigation.goBack(null)
	}
 
	render(){
		return(
			<View style={{flex:1}}>
				<StatusBar translucent={false} barStyle="default" />
				<FlatList
					data={currencies}
					renderItem = {
						({item}) => 
							<ListItem 
								onPress={this.handlePress}
								text={item} 
								selected={this.state.selected === item}
								checkmark={true}
							/>
					}
					keyExtractor={item => item}
				/>
			</View>
		)
	}
}

export default CurrencyList