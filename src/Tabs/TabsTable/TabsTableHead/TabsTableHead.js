import React from 'react'; 


const TabsTableHead = ({ fields }) =>
(
    <thead className="tabs-table-thead">
        <tr className="tabs-table-thead-tr">
            {
                fields
                    .map((field, index) =>
                        {
                            return(
                                <th 
                                    key={`tabsTableCell_${index}`}
                                    className="tabs-table-cell"
                                >
                                    { field }
                                </th>
                            )
                        } 
                    )
            }
        </tr>
    </thead>
);

export default TabsTableHead; 