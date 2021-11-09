import React, { useState } from 'react';

const Button = ({ children, onClick, btnColor = 'grey', labelColor, disabled, theme, type, style, ...props }) => {
    const [
        hover,
        setHover
    ] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    };
    const commonStyles = {
        backgroundColor : btnColor,
        color           : labelColor || 'white',
        padding: `10px 20px`,
        borderRadius    : '3px'

    };
    const outlineStyles = {
        border          : `1px solid ${btnColor}`,
        color           : btnColor,
        backgroundColor : 'white'
    };
    const outlineHoverStyle = {
        border          : `1px solid ${btnColor}`,
        color           : labelColor || 'white',
        backgroundColor : btnColor
    };

    // const disabledStyle = {
    //     cursor          : 'default',
    //     backgroundColor : btnColor,
    //     color           : labelColor || 'white',
    //     opacity         : 0.4
    // };
    const blockStyles = {
        width  : '95%',
        margin : '0 auto'
    };
    let btnStyle;
    switch (theme) {
      
        case 'block':
            btnStyle = blockStyles;
            break;
        case 'outline':
            if (hover) {
                btnStyle = outlineHoverStyle;
            }
            else {
                btnStyle = outlineStyles;
            }
            break;
        default:
            btnStyle = {
                backgroundColor : btnColor,
                color           : labelColor || 'white'
            };
            break;
    }
    return (
        <button
            style={

                    disabled ? { ...commonStyles, ...btnStyle, ...style } :
                    { ...commonStyles, ...btnStyle, ...style }
            }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            {...props}
            type={`${type}`}
            onClick={

                    !disabled ? onClick :
                    () => {}
            }
            className={`button`}
        >
            {children || 'button'}
        </button>
    );
};

export default Button;