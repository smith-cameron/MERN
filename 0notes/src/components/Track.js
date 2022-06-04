import React from'react';

const Track = (props) => {
    const {trackTitle} = props
    const titleStyle = {
        backgroundColor:"yellow",
        color: "darkGreen",
        padding: "10px"
    }
    
    return (
        <div >
            <h3 style={titleStyle} >{trackTitle}</h3>
            <div class="track"></div>
            <div class="track"></div>
            <div class="track"></div>
            <div class="track"></div>
        </div>
    )
}
export default Track;