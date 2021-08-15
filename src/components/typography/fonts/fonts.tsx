import React from 'react';
import styles from './fonts.module.scss';

type typography = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'SubTitle';

const Fonts: React.FC<{
    elementType: typography;
    elementColor?: 'Orange' | 'White' | '';
    className?: string;
}> = (props) => {
    let elementStyle = '';
    let element = '';
    switch (props.elementType) {
        case 'h1':
            elementStyle = styles.H1;
            element = props.elementType;
            break;

        case 'h2':
            elementStyle = styles.H2;
            element = props.elementType;

            break;
        case 'h3':
            elementStyle = styles.H3;
            element = props.elementType;

            break;

        case 'h4':
            elementStyle = styles.H4;
            element = props.elementType;

            break;

        case 'h5':
            elementStyle = styles.H5;
            element = props.elementType;

            break;

        case 'h6':
            elementStyle = styles.H6;
            element = props.elementType;

            break;

        case 'p':
            elementStyle = styles.Paragraph;
            element = props.elementType;

            break;

        case 'SubTitle':
            elementStyle = styles.SubTitle;
            element = 'p';
            break;

        default:
            break;
    }

    let classStyle = elementStyle;
    if (props.elementColor === 'Orange') {
        classStyle = `${elementStyle} ${styles.OrangeColor}`;
    } else if (props.elementColor === 'White') {
        classStyle = `${elementStyle} ${styles.WhiteColor}`;
    }

    return React.createElement(
        element,
        { className: `${classStyle} ${props.className}` },
        props.children
    );
};

export default Fonts;
