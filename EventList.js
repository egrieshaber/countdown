import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

import EventCard from './EventCard.js';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f3f3f3'
  },
});

class EventList extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  state = {
    events: []
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    const events = require('./db.json').events.map(e => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events });
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('form');
  }

  render() {
    const {navigate} = this.props.navigation;
    return [
      <FlatList
        key="flatlist"
        style={styles.list}
        data={this.state.events}
        keyExtractor={item => item.id}
        renderItem={({ item, separators }) => (
          <EventCard
            event={item}
          />
        )}
      />,
      <ActionButton
        key="fab"
        onPress={() => navigate('form'})}
        buttonColor="rgba(231, 76, 60, 1)"
      />
    ];
  }
}

export default EventList;
