import React, { Component } from "react";
import Switch from "react-switch";

class SwitchToggle extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <label className="flex justify-center items-center">
                <span className="text-gray-500 text-sm font-semibold">Dark Mode</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} className="react-switch ml-2" />
            </label>
        );
    }
}

export default SwitchToggle;
