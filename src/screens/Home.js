import React, { Component } from 'react'
import { View, Text, StatusBar, KeyboardAvoidingView } from 'react-native'
import { Header } from '../components/Header'
import { Container  } from '../components/container'
import { Logo } from '../components/logo'
import { InputWithButton } from '../components/input'
import { Reverse } from '../components/reverse'
import { LastConverted } from '../components/lastConverted'


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74 '
const conversionRate = '0.742';
const currentDate = new Date();

class Home extends Component{


	handlePressBaseCurrency = () => {
		this.props.navigation.navigate('CurrencyList', {title:'Base Currency'})
	}

	handlePressQuoteCurrency = () => {
		this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'})
	}

	handleChangeText = (text) => {
		console.log(text)
	}

	swapCurrency = () => {
		console.log('swapping')
	}

	onSettingPress = () => {
		this.props.navigation.navigate('Options')
	}

	render(){
		return(
			<Container>
				<StatusBar backgroundColor="blue" barStyle="light-content" />
				<Header onPress={this.onSettingPress}/>
				<KeyboardAvoidingView behavior="padding">
					<Logo />
					<InputWithButton 
						buttonText={TEMP_BASE_CURRENCY}
						onPress={this.handlePressBaseCurrency}
						defaultValue={TEMP_BASE_PRICE}
						editable={true}
						onChangeText={this.handleChangeText}
					/>
					<InputWithButton 
						buttonText={TEMP_QUOTE_CURRENCY}
						onPress={this.handlePressQuoteCurrency}
						value={TEMP_QUOTE_PRICE}
						editable={false}
					/>
					<LastConverted
						base={TEMP_BASE_CURRENCY}
						quote={TEMP_QUOTE_CURRENCY}
						conversionRate={conversionRate}
						date={currentDate}
					/>
					<Reverse 
						text={'Reverse Currencies'}
						onPress={this.swapCurrency}
					/>
				</KeyboardAvoidingView>
			</Container>
		)
	}
}

export default Home