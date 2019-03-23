import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      
      // if(props.tab === props.selectedTab){
      //   className="tab active-tab"
      // }
      // else{
      //   className="tab"
      // }
  return (
    <div
      className={(props.tab === props.selectedTab ? 'tab active-tab' : 'tab')}//This took me a bit
      onClick={() => {
        props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        console.log('i clickedededs')  
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;
