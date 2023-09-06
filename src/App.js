import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components';

import {
  NotFound,
  Auth,
  Home,
  About,
  Schedule,
  Summary,
  Activities,
  ActivitiesDelete,
} from './features';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment/schedule" element={<Schedule />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/appointment/summary" element={<Summary />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:activityId" element={<ActivitiesDelete />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
