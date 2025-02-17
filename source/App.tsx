import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default class App extends React.Component {
  state = {
    height: 0,
    mass: 0,
    resultNumber: 0,
    resultText: '',
  };

  handleCalculate = () => {
    let imc =
      (this.state.mass / (this.state.height * this.state.height)) * 10000;
    this.setState({
      resultNumber: imc.toFixed(2),
    });

    if (imc < 18.5) {
      this.setState({resultText: 'لاغر'});
    } else if (imc > 18.5 && imc < 25) {
      this.setState({resultText: 'معمولی'});
    } else if (imc >= 25 && imc < 30) {
      this.setState({resultText: 'اضافه وزن'});
    } else {
      this.setState({resultText: 'چاق'});
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text
            style={{
              color: '#FFCB1F',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 30,
              fontSize: 15,
            }}>
            محاسبه شاخص توده بدنی
          </Text>
          <View style={styles.intro}>
            <TextInput
              placeholder="قد"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={height => {
                this.setState({height});
              }}
            />
            <TextInput
              placeholder="وزن"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={mass => {
                this.setState({mass});
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCalculate}>
            <Text style={styles.buttonText}>محاسبه</Text>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.resultNumber}</Text>
          <Text style={[styles.result, {fontSize: 35}]}>
            {this.state.resultText}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5fcff"
  },
  intro: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
    color: '#FFCB1F',
  },
  button: {
    backgroundColor: '#1D1D1B',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#FFCB1F',
    fontWeight: 'bold',
  },
  result: {
    alignSelf: 'center',
    color: '#FFCB1F',
    fontSize: 65,
    padding: 15,
  },
});
