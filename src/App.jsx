import './App.css'
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>} />
                {/*<Route path="/newposts" element={<NewPosts/>} />*/}
                {/*<Route path="/overview" element={<Overview/>} />*/}

            </Routes>
        </>
    )
}

export default App
