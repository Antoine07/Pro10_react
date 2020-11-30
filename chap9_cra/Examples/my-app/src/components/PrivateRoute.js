import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component{

    render(){
        const { children, ...rest } = this.props;
        const isLogged = false;

        return (
            <Route 
                { ...rest }
                render={ ({location}) => 
                isLogged ? this.props.children :
                <Redirect 
                    to={{pathname : '/login', state :location}} 
                />
                }
            />
        );
    }
}

export default PrivateRoute;