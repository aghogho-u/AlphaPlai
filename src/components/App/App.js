import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import movie from '../Movie/movie';
import NotFound from '../elements/NotFound/NotFound';

const App = () => {

    return (
       <BrowserRouter basename='/alphaplai/'>
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/:movieid" component={movie} exact />
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
       </BrowserRouter>
    )
}

export default App;