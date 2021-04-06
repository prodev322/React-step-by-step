import React from 'react';
import {ThemeContext} from './theme-context';
import { Button } from 'react-bootstrap';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;

        return (
            <Button 
                {...props}
                style={{backgroundColor: theme.background}}
            />
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;