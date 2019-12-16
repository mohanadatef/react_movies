import React, { Component } from "react";

import {
    View,
    Text,
    ActivityIndicator,
    TextInput,
    Picker,
    DatePickerAndroid,
    DatePickerIOS,
    Platform,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import StyledTextInput from "movies/src/components/styled-text-input";

import Styles from "movies/src/styles/app";

class App extends Component {
    state = {
        loading: true,
        movieName: "",
        movieUrl: "",
        movieType: "",
        movieDate: ""
    };

    componentDidMount() {}

    handleChange(value, prop) {
        this.setState({ [prop]: value });
    }

    async showDatePicker() {
        if (Platform.OS === "android") {
            try {
                const {
                    action,
                    year,
                    month,
                    day
                } = await DatePickerAndroid.open({
                    date: new Date()
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                    this.setState({
                        movieDate: new Date(year, month, day).toISOString()
                    });
                }
            } catch ({ code, message }) {
                console.warn("Cannot open date picker", message);
            }
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.header}>Movies</Text>

                <View style={Styles.form}>
                    <StyledTextInput
                        value={this.state.movieName}
                        label="Name"
                        placeholder={"Please enter movie name!"}
                        handleChange={value =>
                            this.handleChange(value, "movieName")
                        }
                    />
                    <StyledTextInput
                        value={this.state.movieUrl}
                        label="Image"
                        placeholder={"Please enter movie image url!"}
                        handleChange={value =>
                            this.handleChange(value, "movieUrl")
                        }
                    />
                    <Text style={Styles.label}>Type</Text>
                    <Picker
                        style={Styles.movieTypes}
                        selectedValue={this.state.movieType}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ movieType: itemValue })
                        }>
                        <Picker.Item label="Horror" value="horror" />
                        <Picker.Item label="Comedy" value="comedy" />
                        <Picker.Item label="Drama" value="drama" />
                        <Picker.Item label="Action" value="action" />
                    </Picker>
                    <TouchableOpacity onPress={() => this.showDatePicker()}>
                        <StyledTextInput
                            value={this.state.movieDate}
                            label="Release Date"
                            editable={false}
                            placeholder={"Please select release date"}
                            handleChange={value =>
                                this.handleChange(value, "movieDate")
                            }
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default App;
