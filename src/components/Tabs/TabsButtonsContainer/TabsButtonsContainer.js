import React from 'react'; 
import { connect } from 'react-redux'; 

import TabsButton from './TabsButton'; 


const mapStateToProps = state => 
(
    {
        names: state.names
    }
);


const TabsButtonsContainer = ({ names, activeIndex, handleButtonClick }) => 
(
    <div class="tabs-buttons-container">
        {
            names
                .map((name, index) =>
                    {
                        return (
                            <TabsButton
                                key={`tabsButton_${index}`}
                            
                                activeIndex={activeIndex}
                                index={index}
                                text={name}
                                onClick={() => handleButtonClick(index)}
                            />
                        );
                    }
                )
        }
    </div>
);

export default connect(
    mapStateToProps
)(TabsButtonsContainer); 