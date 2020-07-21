import React from 'react';
import { Route } from 'react-router-dom';
import hackerNews from '../container/hackerNews';

class CustomRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      
        }
    }

    componentDidMount() {
  
    }
    
    componentDidUpdate() {
       
    }

    render() {
     return(
        <React.Fragment>
            <Route exact path="/:id" component={hackerNews}/>
        </React.Fragment>
     )
    }
}

export default CustomRoute;