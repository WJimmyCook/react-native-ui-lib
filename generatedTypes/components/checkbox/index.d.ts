import React from 'react';
import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';
interface CheckboxProps {
    /**
     * The value of the Checkbox. If true the switch will be turned on. Default value is false.
     */
    value?: boolean;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: Function;
    /**
     * Whether the checkbox should be disabled
     */
    disabled?: boolean;
    /**
     * The Checkbox color
     */
    color?: string;
    /**
     * The size of the checkbox. affect both width and height
     */
    size?: number;
    /**
     * The Checkbox border radius
     */
    borderRadius?: number;
    /**
     * The icon asset to use for the selected indication (accept only local assets)
     */
    selectedIcon?: number;
    /**
     * The selected icon color
     */
    iconColor?: string;
    /**
     * Additional styling
     */
    style?: StyleProp<ViewStyle>;
}
declare type Props = CheckboxProps & TouchableOpacityProps;
declare const _default: React.ComponentType<Props>;
export default _default;
