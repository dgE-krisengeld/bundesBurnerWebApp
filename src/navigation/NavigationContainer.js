import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {HomeContainer} from "../containers/Home/Home";
import {BusinessesContainer} from "../containers/Businesses/Businesses";
import {HelpContainer} from "../containers/Help/Help";
import {QrCodeContainer} from "../containers/Home/QrCode";
import {MyQrCodeContainer} from "../containers/Home/MyQrCode";

export default function NavigationContainer() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/businesses">Geschäfte</Link>
                    </li>
                    <li>
                        <Link to="/help">Hilfe</Link>
                    </li>
                </ul>

                <Switch>

                    <Route path="/businesses">
                        <BusinessesContainer />
                    </Route>
                    <Route path="/help">
                        <HelpContainer />
                    </Route>

                    <Route path="/scanQR">
                        <QrCodeContainer />
                    </Route>

                    <Route path="/myQrCode">
                        <MyQrCodeContainer />
                    </Route>

                    <Route path="/">
                        <HomeContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

