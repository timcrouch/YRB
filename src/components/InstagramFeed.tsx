import React from 'react';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption: string;
}

const mockInstagramPosts: InstagramPost[] = [
  {
    id: '1',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    permalink: 'https://www.instagram.com/',
    caption: 'Enjoying a night out at Yellow Rose Bar! 🌟🍸 #YellowRoseBar #NightLife',
  },
  {
    id: '2',
    media_type: 'VIDEO',
    media_url: 'https://assets.mixkit.co/videos/preview/mixkit-bartender-serving-cocktail-in-a-bar-1456-large.mp4',
    permalink: 'https://www.instagram.com/',
    caption: 'Our talented bartenders in action! 🍹✨ #CocktailMagic #YellowRoseBar',
  },
  {
    id: '3',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    permalink: 'https://www.instagram.com/',
    caption: 'Live music nights at Yellow Rose Bar are always a blast! 🎸🎶 #LiveMusic #PortoNightlife',
  },
  {
    id: '4',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    permalink: 'https://www.instagram.com/',
    caption: 'Cheers to the weekend! 🥂 #FridayNight #YellowRoseBar',
  },
  {
    id: '5',
    media_type: 'VIDEO',
    media_url: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-disco-1233-large.mp4',
    permalink: 'https://www.instagram.com/',
    caption: 'Saturday night vibes at Yellow Rose Bar! 💃🕺 #DanceNight #WeekendFun',
  },
  {
    id: '6',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    permalink: 'https://www.instagram.com/',
    caption: 'Discover our signature cocktails! 🍸 #CocktailMenu #YellowRoseSpecials',
  },
];

const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram-feed" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
          <Instagram className="inline-block mr-2 text-pink-500" />
          Latest from Instagram
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockInstagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              {post.media_type === 'VIDEO' ? (
                <video
                  src={post.media_url}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  loop
                  muted
                  playsInline
                  autoPlay
                />
              ) : (
                <img
                  src={post.media_url}
                  alt={post.caption.slice(0, 50)}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-4">
                  {post.caption.slice(0, 100)}
                  {post.caption.length > 100 ? '...' : ''}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;