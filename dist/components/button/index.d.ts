import React from 'react';
import './index.less';
declare type buttonType = 'large' | 'middle' | 'small';
interface ButtonProps {
    children?: React.ReactNode;
    type?: string;
    size?: buttonType;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
