import React from 'react';

const Tab = (props) => {
    const {tabList, showIdx , setIdx} = props;
    const tabStyle = (index) => {
      if (index === showIdx) {
        return "selectedTab";
      } else {
        return "nonSelectedTab";
      }
    }
    const submitHandler = (index) => {
      setIdx(index)
    }
    return(
        <div className="tabGroup">
            {
              tabList.map((tab, index) =>(
                    <div className="displayGroup" key={index}>
                    <button className={`tab ${ tabStyle(index) }`} onClick={() => submitHandler(index)}
                    >{tab.title}</button>
                </div>
                    )
                )
            }
        </div>
    )
    };

export default Tab