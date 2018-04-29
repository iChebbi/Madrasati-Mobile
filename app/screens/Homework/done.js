import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from "react-redux";
import { getHomework } from "../../actions/userActions";
class Done extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Hello Done</Text>
			</View>
		)
	}
}


const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
	},
	text: {
		elevation: 10,
		fontSize: 10,
	}
}


const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomework: id => dispatch(getHomework(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);
