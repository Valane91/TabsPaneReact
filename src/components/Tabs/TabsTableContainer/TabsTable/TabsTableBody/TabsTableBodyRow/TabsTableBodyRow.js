import React from 'react'; 


const TabsTableBodyRow = ({ cells, isGray }) => 
{
    let className = "tabs-table-tr"

    if(isGray)
        className += " tabs-table-tr-gray";

    return(
        <tr className={className}>
            <td className="tabs-table-cell-checkbox tabs-table-cell">
                <input type="checkbox" />
            </td>
            
            {
                cells
                    .map((cell, index) => 
                        {
                            return(
                                <td 
                                    key={`tabTableTrCell_${index}`} 
                                    className="tabs-table-cell"
                                >
                                    { cell }
                                </td>
                            );
                        }
                    )
            }
        
        </tr>
    );
};
 
export default TabsTableBodyRow; 