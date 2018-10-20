import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Routes from './Routes'
import { AlertProvider } from './components/alert'

EStyleSheet.build({
	$primaryOrange:'#D57A66',
	$primaryGreen:'#00BD96',
	$primaryPurple:'#9E768F',
	$primaryBlue:'#4F6D7A',
	$white:'#fff',
	$darkText:'#343434'
})


const App = () => {
	return(
		<AlertProvider>
			<Routes />
		</AlertProvider>
	)
}

export default App