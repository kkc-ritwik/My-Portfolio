import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CommandPalette from './components/CommandPalette';
import ChatWidget from './components/ChatWidget';

// Below-the-fold sections are code-split so the initial load stays light.
const Services = lazy(() => import('./components/Services'));
const Stats = lazy(() => import('./components/Stats'));
const Skills = lazy(() => import('./components/Skills'));
const Timeline = lazy(() => import('./components/Timeline'));
const Projects = lazy(() => import('./components/Projects'));
const GitHubActivity = lazy(() => import('./components/GitHubActivity'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Process = lazy(() => import('./components/Process'));
const Resume = lazy(() => import('./components/Resume'));
const Gaming = lazy(() => import('./components/Gaming'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-gray-50">
      <CommandPalette />
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<div className="h-px" />}>
        <Services />
        <Stats />
        <Skills />
        <Timeline />
        <Projects />
        <GitHubActivity />
        <Testimonials />
        <Process />
        <Resume />
        <Gaming />
        <Achievements />
        <Certifications />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
      <ChatWidget />
    </div>
  );
}

export default App;
