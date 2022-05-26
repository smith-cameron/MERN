import React, {Component} from 'react';

class FirstComponent extends Component{
    render(){
        return(
            <div>
                {this.props.someText}
            </div>
        );
    }
}

export default FirstComponent;