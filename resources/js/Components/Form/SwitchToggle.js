import React from "react";
import Switch from "react-switch";

export default function SwitchToggle({ auth }) {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    return (
        <label className="flex justify-center items-center">
            <span className="text-gray-500 text-sm font-semibold">Dark Mode</span>
            <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch ml-2"
            />
        </label>
    );
}
