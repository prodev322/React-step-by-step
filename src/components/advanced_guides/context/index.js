// import React from 'react';
// import { Container, Button } from 'react-bootstrap';

// const ThemeContext = React.createContext('light');

// class Context extends React.Component {
//     render() {
//         return (
//             <Container>
//                 <div className="d-flex justify-content-center">
//                     <div className="main-page">
//                         <ThemeContext.Provider value="dark">
//                             <ToolBar />
//                         </ThemeContext.Provider>
//                     </div>
//                 </div>
//             </Container>
//         );
//     }
// }

// function ToolBar() {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     );
// }

// class ThemedButton extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         return (
//             <React.Fragment>
//                 <Button theme={this.context}>{this.context}</Button>
//             </React.Fragment>
//         );
//     }
// }

// export default Context;

import React from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

function Toolbar(props) {
    return(
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.dark
        };

        this.toggleTheme = () => {
            this.setState({
              theme:
                this.state.theme === themes.light
                  ? themes.dark
                  : themes.light,
            });
        };
    }

    render() {
        return (
            <Container>
                <div className="d-flex justify-content-center main-page">
                    <ThemeContext.Provider value={this.state.theme}>
                        <Toolbar changeTheme={this.toggleTheme} />
                    </ThemeContext.Provider>
                </div>
            </Container>
        );
    }
}

export default Context;