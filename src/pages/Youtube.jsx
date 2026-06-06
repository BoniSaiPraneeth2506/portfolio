import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import YoutubeHero from '../components/youtube/YoutubeHero';
import YoutubeStats from '../components/youtube/YoutubeStats';
import YoutubeTimeline from '../components/youtube/YoutubeTimeline';
import AnalyticsDashboard from '../components/youtube/AnalyticsDashboard';
import TopVideos from '../components/youtube/TopVideos';
import ContentStrategy from '../components/youtube/ContentStrategy';
import Experiments from '../components/youtube/Experiments';
import ContentSystem from '../components/youtube/ContentSystem';
import '../components/youtube/Youtube.css';

const Youtube = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="youtube-portfolio pt-20">
        <YoutubeHero />
        <YoutubeStats />
        <YoutubeTimeline />
        <AnalyticsDashboard />
        <TopVideos />
        <ContentStrategy />
        <Experiments />
        <ContentSystem />
      </div>
    </>
  );
};

export default Youtube;
