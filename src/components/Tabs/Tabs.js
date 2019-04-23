import React from 'react'; 

import TabsButtonContainer from './TabsButtonsContainer';
import TabsTable from './TabsTable';
import TabsTableBody from './TabsTable/TabsTableBody';


class Tabs extends React.Component 
{
    constructor()
    {
        super(); 

        this.state = 
            {
                activeIndex: 0
            };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(index)
    {
        if(index !== this.state.activeIndex)
        {
            this.setState(
                {
                    activeIndex: index
                }
            );
        }
    }

    render()
    {
        return(
            <div className="tabs">
                <TabsButtonContainer
                    activeIndex={this.state.activeIndex}
                    handleButtonClick={ index => this.handleButtonClick(index) }
                />

                <TabsTable />
            </div>
        );
    }
}


export default Tabs; 