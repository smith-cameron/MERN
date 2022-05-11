import React from 'react';

const Body = (props) => {
  const { tabList, showIdx } = props;

  return (
    <div className="display">
      { tabList[showIdx].content }
    </div>
  )
}

export default Body;