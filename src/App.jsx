import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import HomeNew from './pages/HomeNew';
import LabsNew from './pages/LabsNew';
import StoryNew from './pages/StoryNew';
import NewsNew from './pages/NewsNew';
import ContactNew from './pages/ContactNew';
import Home from './pages/Home';
import AppleHome from './pages/AppleHome';
import Story from './pages/Story';
import Labs from './pages/Labs';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-black">
          {/* 路由配置 */}
          <Routes>
            {/* 新版页面（苹果 2026 风格） */}
            <Route path="/" element={<HomeNew />} />
            <Route path="/labs" element={<LabsNew />} />
            <Route path="/story" element={<StoryNew />} />
            <Route path="/news" element={<NewsNew />} />
            <Route path="/contact" element={<ContactNew />} />

            {/* 旧版页面（保留备份） */}
            <Route path="/original" element={<Home />} />
            <Route path="/apple" element={<AppleHome />} />
            <Route path="/labs-old" element={<Labs />} />
            <Route path="/story-old" element={<Story />} />
            <Route path="/news-old" element={<News />} />
            <Route path="/contact-old" element={<Contact />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
