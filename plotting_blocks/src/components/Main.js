import React from 'react';

const Main = (props) => {

    return (
        <div className="Main">
            <div className="Content">
            {props.subcontent}
            {props.subcontent}
            {props.subcontent}
            </div>
            {props.ad}
        </div>
    )
}
export default Main;