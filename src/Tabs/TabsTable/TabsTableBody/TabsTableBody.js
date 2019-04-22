import React from 'react'; 

import TabsTableBodyRow from './TabsTableBodyRow'; 


const TabsTableBody = ({ rows }) => 
(
    <tbody className="tabs-table-tbody">
        {
            rows
                .map((row, index) => 
                    {
                        return(
                            <TabsTableBodyRow
                                key={`tabsTableBodyRow_${index}`}

                                isGray={ (index % 2) !== 0 } 
                                cells={row}
                            />
                        );
                    }
                )
        }
    </tbody>
); 

export default TabsTableBody; 