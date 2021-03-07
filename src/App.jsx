import React from 'react';
import {Switch, Route} from "react-router-dom";
import {LibraryRegionsList} from "./features/libraryRegions/pages/LibraryRegionsList.jsx";
import {LibraryRegionCard} from "./features/libraryRegions/pages/LibraryRegionCard.jsx";

export const App = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'}>
                    <LibraryRegionsList/>
                </Route>
                <Route path={'/:regionId'} exact>
                    <LibraryRegionCard/>
                </Route>
            </Switch>
        </>
    );
};