// App.js for Mizzima OTT Mobile App built with Expo
// Supports Live TV, YouTube, News, Podcast, and Magazine tabs

import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';

const ExternalLink = ({ url, label }) => (
  <Button title={label} onPress={() => Linking.openURL(url)} />
);

const App = () => {
  const [tab, setTab] = useState('live');

  const renderTab = () => {
    switch (tab) {
      case 'live':
        return (
          <Video
            source={{ uri: 'https://52.77.246.163/live/Mizzima-Live2/playlist.m3u8' }}
            useNativeControls
            resizeMode="contain"
            style={{ width: '100%', height: 200 }}
          />
        );
      case 'youtube':
        return (
          <ScrollView>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/videoseries?list=PL1FfogmNIjcSbnZZ9-izjbZOsgF30tAZM' }}
              style={{ height: 300 }}
            />
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/videoseries?list=PL1FfogmNIjcTA-8U3nEisarLVyurdpP9w' }}
              style={{ height: 300 }}
            />
          </ScrollView>
        );
      case 'news':
        return (
          <View>
            <ExternalLink label="Burmese News" url="https://bur.mizzima.com" />
            <ExternalLink label="English News" url="https://eng.mizzima.com" />
            <ExternalLink label="Mizzima Facebook" url="https://www.facebook.com/MizzimaDaily" />
          </View>
        );
      case 'magazine':
        return (
          <View>
            <ExternalLink label="Weekly Magazine" url="https://www.mizzimaweekly.com" />
            <ExternalLink label="Substack" url="https://mizzimadailynews.substack.com" />
          </View>
        );
      case 'podcast':
        return (
          <View>
            <Text>Morning Briefing</Text>
            <Audio.Sound
              source={{ uri: 'https://example.com/audio/morning-briefing.mp3' }}
              shouldPlay={false}
            />
            <Text>Current Affairs</Text>
            <Audio.Sound
              source={{ uri: 'https://example.com/audio/current-affairs.mp3' }}
              shouldPlay={false}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mizzima Media Hub</Text>
      <View style={styles.tabBar}>
        <Button title="Live" onPress={() => setTab('live')} />
        <Button title="YouTube" onPress={() => setTab('youtube')} />
        <Button title="News" onPress={() => setTab('news')} />
        <Button title="Magazine" onPress={() => setTab('magazine')} />
        <Button title="Podcast" onPress={() => setTab('podcast')} />
      </View>
      <ScrollView style={styles.content}>{renderTab()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
});

export default App;
// This is the main entry point for the Mizzima OTT app.