const initialState = 
    {
        names: 
            [
                'Ponies'
                , 'Ponies'
                , 'Ponies'
            ]
        , fields: 
            [
                [
                    'Name'
                    , 'Color'
                    , 'Element'
                ]
                , [
                    'Name'
                    , 'Color'
                    , 'Element'
                ]
                , [
                    'Name'
                    , 'Color'
                    , 'Element'
                ]
            ]
        , valuesArray: 
            [
                [
                    [
                        'Twilight Sparkle'
                        , 'Purple'
                        , 'Magic'
                    ]
                    , [
                        'Fluttershy'
                        , 'Yellow'
                        , 'Kindness'
                    ]
                ]        
                , [
                    [
                        'Pinkie Pie'
                        , 'Pink'
                        , 'Spain'
                    ]
                    , [
                        'Applejack'
                        , 'Orange'
                        , 'Honesty'
                    ]    
                ]
                , [
                    [
                        'Rarity'
                        , 'White'
                        , 'Generosity'
                    ]
                    , [
                        'Rainbow Dash'
                        , 'Blue'
                        , 'Loyalty'
                    ]    
                ]

            ]
        }; 

const reducers = (state=initialState, action) => 
{
    return state; 
}

export default reducers; 