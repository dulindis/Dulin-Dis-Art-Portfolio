import React from 'react';


import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles';

//higher order funtional compoentn returns anotehr fucntiona component
const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading,...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    };
    return Spinner;
};

export default WithSpinner;