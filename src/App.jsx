import React from 'react';
import {Switch, Route} from "react-router-dom";
import {FilterableLibrariesPage} from "./features/libraries/pages/FilterableLibrariesPage.jsx";
import {LibraryPage} from "./features/libraries/pages/LibraryPage.jsx";

export const App = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'}>
                    <FilterableLibrariesPage/>
                </Route>
                <Route path={'/:regionId'}>
                    <LibraryPage/>
                </Route>
            </Switch>
        </>
    );
};