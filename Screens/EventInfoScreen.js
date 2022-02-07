import React from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import Event from '../components/Events'
import { useState, useEffect } from 'react';



const EventScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [loadData, setData] = useState([]);
  
    const getBulletin = async () => {
       try {
        const response = await fetch('https://mocki.io/v1/ab0683af-09a5-4781-b09a-9ed111373940');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getBulletin();
    }, []);
  
    return (
      <View>
      <View style= {styles.all} >
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={loadData}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Event text={item.content}/>
            )}
          />
        )}
      </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    all: {
      marginTop: 100,
      padding: 24,
  
    }
  });

export default EventScreen;