import React, { Fragment } from 'react';

import TabsTable from './TabsTable';


const mapStateToProps = state => 
(
    {
        valuesArray: state.valuesArray
    }
)


const TabsTableContainer = ({ valuesArray, activeIndex }) => 
(
    <Fragment>
        {
            valuesArray
                .map((values, index) => 
                    {
                        return(
                            <TabsTable
                                key={`tabsTable_${index}`}

                                index={index}
                                activeIndex={activeIndex}
                            />
                        )
                    }
                )
        }
    </Fragment>
)