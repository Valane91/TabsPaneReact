import React from 'react'; 

import { connect } from 'react-redux';


const mapStateToProps = state => 
(
    {
        fields: state.fields
    }
);

const TabsTableHead = ({ fields }) =>
(
    <thead className="tabs-table-thead">
        <tr className="tabs-table-thead-tr">

            <th 
                className="tabs-table-cell"
            >
            </th>

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

export default connect(
    mapStateToProps
)(TabsTableHead); 