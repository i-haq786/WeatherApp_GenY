//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const apikey='8254e1eb1d2f37837dc2bfe08e9a81ff';



const Weather = () => {
  const [weather, setweather] = useState(data);

  var data={
    weathertype: "",
    temp: " ",
    tempmin: "",
    tempmax: "",
    humidity: ""
  };

  useEffect (()=>{
    getweather('Chennai',setweather);
  },[]);
function getweather(city,setweather){

  var data2={
    weathertype: null,
    temp: null,
    tempmin: null,
    tempmax: null,
    humidity: null
  };
  axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+"&units=metric")
  .then(function (response) {
    // handle success
    console.log("success");
    data2.temp=response.data.main.temp;
    console.log(data2.temp);
    data2.tempmax=response.data.main.temp_max;
    data2.tempmin=response.data.main.temp_min;
    data2.humidity=response.data.main.humidity;
    data2.weathertype=response.data.weather[0].description;
    setweather(data2);
   console.log(weather.temp);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
        <Text style={styles.tempText}>{weather.temp??"Temperature"}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>So Sunny</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;

/*
var data={
    weathertype: null,
    temp: null,
    tempmin: null,
    tempmax: null,
    humidity: null
  };
function getweather(city,setweather){

  var data2={
    weathertype: null,
    temp: null,
    tempmin: null,
    tempmax: null,
    humidity: null
  };

  
  axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey)
  .then(function (response) {
    // handle success
    data2.temp=response.data.main.temp;
    data2.tempmax=response.data.main.temp_max;
    data2.tempmin=response.data.main.temp_min;
    data2.humidity=response.data.main.humidity;
    data2.weathertype=response.data.weather[0].description;
    setweather(data2);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}

export default function App() {
  const [weather, setweather] = useState(data);
  useEffect (()=>{
    getweather('Chennai',setweather);
  },[]);
  return (
    <View style={styles.container}>
      <Text>Temperature : {weather.temp}</Text>
      <Text>Min. Temperature : {weather.tempmin}</Text>
      <Text>Max. Temperature : {weather.tempmax}</Text>
      <Text>Humidity : {weather.humidity}</Text>
      <Text>WeatherType : {weather.weathertype}</Text>
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
