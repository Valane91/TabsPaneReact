import React from 'react'; 

import TabsTableHead from './TabsTableHead';
import TabsTableBody from './TabsTableBody';


const TabsTable = ({ fields, rows }) => 
(
    <table className="tabs-table">
        
        <TabsTableHead 
            fields={fields}
        />
    
        <TabsTableBody 
            rows={rows}
        />

    </table>
); 

export default TabsTable; 