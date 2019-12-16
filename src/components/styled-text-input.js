import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import { View, Text, TextInput } from "react-native";

import Styles from "movies/src/styles/components/styled-text-input";

class StyledTextInput extends PureComponent {
    render() {
        return (
            <View style={Styles.inputContainer}>
                <Text>{this.props.label}</Text>
                <TextInput
                    value={this.props.value}
                    editable={this.props.editable}
                    placeholder={this.props.placeholder}
                    underlineColorAndroid={"green"}
                    onChange={value => this.props.handleChange(value)}
                />
            </View>
        );
    }
}

StyledTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    editable: PropTypes.bool
};

export default StyledTextInput;
