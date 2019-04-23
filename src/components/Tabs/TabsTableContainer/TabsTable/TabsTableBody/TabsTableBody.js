import React from 'react'; 

import { connect } from 'react-redux';

import TabsTableBodyRow from './TabsTableBodyRow'; 


const mapStateToProps = state => 
(
    {
        values: state.values
    }
);

const TabsTableBody = ({ values }) => 
(
    <tbody className="tabs-table-tbody">
        {
            values
                .map((value, index) => 
                    {
                        return(
                            <TabsTableBodyRow
                                key={`tabsTableBodyRow_${index}`}

                                isGray={ (index % 2) !== 0 } 
                                cells={value}
                            />
                        );
                    }
                )
        }
    </tbody>
); 

export default connect(
    mapStateToProps
)(TabsTableBody); 