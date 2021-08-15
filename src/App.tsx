import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Headphones from './pages/headphones/heaphones';
import Auth from './pages/auth/auth';

const App: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route path="/headphones">
                    <Headphones />
                </Route>

                <Route path="/earphones">
                    <h1>Earphones</h1>
                </Route>

                <Route path="/speakers">
                    <h1>Speakers</h1>
                </Route>

                <Route path="/auth">
                    <Auth />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
