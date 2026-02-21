import './App.css'
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import NewPosts from './pages/NewPosts/Newposts';
import Overview from './pages/Overview/Overview';
import NotFound from './pages/NotFound/NotFound';
import Blogpost from './components/Blogpost/Blogpost.jsx';
import {Route, Routes} from 'react-router-dom';


function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/newposts" element={<NewPosts/>} />
                <Route path="/overview" element={<Overview/>} />
                <Route path="*" element={<NotFound />} />
                <Route path="/posts/:id" element={<Blogpost/>} />
            </Routes>
        </>
    )
}

export default App
