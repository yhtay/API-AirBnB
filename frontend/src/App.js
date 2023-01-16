// frontend/src/App.js
import React, { useState, useEffect } from "react";


import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Spots from "./components/Spots";
import CreateSpotModal from "./components/Spots/CreateSpotModal";
// import EditSpotForm from "./components/Spots/EditSpotForm";
// import OpenModalMenuItem from './OpenModalMenuItem';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path={'/'}>
            <Spots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
