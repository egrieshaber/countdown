import React, { Component } from  'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDate } from './api';

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight:7,
    paddingLeft: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    borderColor: '#48bbec',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.9,
  }
});

class EventForm extends Component {
  state = {
    title: null,
    date: '',
    isDateTimePickerVisible: false
  };

  handleAddPress = () => {
    console.log(this.state)
    this.props.navigation.goBack();
  };

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  };

  handleDatePress = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  // handleDatePicked = (date) => {
  //   this.setSate({
  //     date,
  //   });
  //
  //   this.handleDatePickerHide();
  // }
  //
  // handleDatePickerHide = () => {
  //   this.setState({ showDatePicker: false });
  // }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A datetime has been picked: ', date);
    this.setState({
      date,
    });
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder="Event Title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          />
        <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event Date"
            spellCheck={false}
            value={formatDate(this.state.date.toString())}
            editable={!this.state._showDateTimePicker}
            onFocus={this.handleDatePress}
            onPress={this._showDateTimePicker}
          />
        <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
        </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={styles.button}
        >
          <Text stlye={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
