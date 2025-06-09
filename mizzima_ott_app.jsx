// Mizzima Media Hub - Complete OTT React App with Essential Components
// Deployment-ready for Vercel and compatible with PWA or Expo for mobile apps

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Mizzima Media Hub",
  description: "Watch Mizzima TV Live, explore YouTube content, and read Burmese and English news, weekly magazine, and Substack."
};

function ExternalLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline hover:text-blue-300"
    >
      {label}
    </a>
  );
}

function PlaylistCard({ title, url }) {
  return (
    <Card className="bg-gray-900">
      <CardContent>
        <h3 className="font-semibold mb-2">{title}</h3>
        <iframe
          width="100%"
          height="200"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg border"
        ></iframe>
      </CardContent>
    </Card>
  );
}

function PodcastCard({ title, description, url }) {
  return (
    <Card className="bg-gray-900">
      <CardContent>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{description}</p>
        <audio controls className="w-full">
          <source src={url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </CardContent>
    </Card>
  );
}

export default function MizzimaOTT() {
  const [tab, setTab] = useState("live");

  const playlists = [
    {
      title: "The Mizzima Primetime",
      url: "https://www.youtube.com/embed/videoseries?list=PL1FfogmNIjcSbnZZ9-izjbZOsgF30tAZM"
    },
    {
      title: "Editorial Talk",
      url: "https://www.youtube.com/embed/videoseries?list=PL1FfogmNIjcTA-8U3nEisarLVyurdpP9w"
    },
    {
      title: "Exclusive Interviews",
      url: "https://www.youtube.com/embed/videoseries?list=PL1FfogmNIjcSl8mb5J2vyLWPJyxFZ7oom"
    },
    {
      title: "Local News",
      url: "https://www.youtube.com/embed/videoseries?list=PL1FfogmNIjcSHGnHLAsUaE-a0Yzj-ob_O"
    },
    {
      title: "International News",
      url: "https://www.youtube.com/embed/videoseries?list=PL1FfogmNIjcTokO7SUke7vlnjW-R7-jNW"
    }
  ];

  const podcasts = [
    {
      title: "Morning Briefing",
      description: "Daily headlines in 5 minutes (Burmese)",
      url: "https://example.com/audio/morning-briefing.mp3"
    },
    {
      title: "Mizzima Current Affairs",
      description: "Weekly analysis of political events",
      url: "https://example.com/audio/current-affairs.mp3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Mizzima Media Hub</h1>

      <Tabs value={tab} onValueChange={setTab} className="space-y-4">
        <TabsList className="flex space-x-2 overflow-x-auto">
          <TabsTrigger value="live">📺 Live TV</TabsTrigger>
          <TabsTrigger value="youtube">🎥 YouTube</TabsTrigger>
          <TabsTrigger value="news">📰 News</TabsTrigger>
          <TabsTrigger value="magazine">📚 Magazine</TabsTrigger>
          <TabsTrigger value="podcast">🎧 Podcast</TabsTrigger>
        </TabsList>

        <TabsContent value="live">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Watch Mizzima TV Live</h2>
              <div className="aspect-video">
                <video
                  src="https://52.77.246.163/live/Mizzima-Live2/playlist.m3u8"
                  controls
                  className="w-full h-full rounded-lg border"
                ></video>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="youtube">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {playlists.map((p, i) => (
              <PlaylistCard key={i} title={p.title} url={p.url} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="news">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card><CardContent><h3 className="font-semibold">Burmese News</h3><ExternalLink href="https://bur.mizzima.com" label="bur.mizzima.com" /></CardContent></Card>
            <Card><CardContent><h3 className="font-semibold">English News</h3><ExternalLink href="https://eng.mizzima.com" label="eng.mizzima.com" /></CardContent></Card>
            <Card><CardContent><h3 className="font-semibold">Facebook Updates</h3><ExternalLink href="https://www.facebook.com/MizzimaDaily" label="facebook.com/MizzimaDaily" /></CardContent></Card>
          </div>
        </TabsContent>

        <TabsContent value="magazine">
          <Card>
            <CardContent>
              <h3 className="font-semibold">Read the Weekly Magazine</h3>
              <ExternalLink href="https://www.mizzimaweekly.com" label="mizzimaweekly.com" />
              <h3 className="mt-4 font-semibold">Subscribe to Substack</h3>
              <ExternalLink href="https://mizzimadailynews.substack.com" label="mizzimadailynews.substack.com" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="podcast">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {podcasts.map((p, i) => (
              <PodcastCard key={i} title={p.title} description={p.description} url={p.url} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
