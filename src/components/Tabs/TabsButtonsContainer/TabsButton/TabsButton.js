import React from 'react'; 


const TabsButton = ({ text, index, activeIndex, onClick }) => 
{
    let className = "tabs-button";

    if(activeIndex === index)
        className += " tabs-button-active";

    return(
        <button 
            className={className}
            onClick={() => onClick()}
        >
            { text }
        </button>
    );
}

export default TabsButton; 