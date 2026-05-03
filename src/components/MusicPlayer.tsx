import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Disc } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Fetch preview URL from iTunes API for "Stonecutters" by Dope Lemon
    fetch('https://itunes.apple.com/search?term=Dope+Lemon+Stonecutters&entity=song&limit=1')
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results[0]?.previewUrl) {
          setAudioUrl(data.results[0].previewUrl);
        }
      })
      .catch(err => console.error('Error fetching audio preview:', err));
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-4 group">
      {audioUrl && (
        <audio 
          ref={audioRef} 
          src={audioUrl} 
          loop 
          onEnded={() => setIsPlaying(false)}
        />
      )}
      
      <div className="relative">
        <motion.div
          animate={{
            rotate: isPlaying ? 360 : 0
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-electric-blue"
        >
          <Disc size={40} strokeWidth={1.5} />
        </motion.div>
        
        <button 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center text-electric-blue hover:bg-electric-blue/5 rounded-full transition-colors"
          title={isPlaying ? "Pause" : "Play"}
          id="music-control"
        >
          {isPlaying ? (
            <Pause size={12} fill="currentColor" />
          ) : (
            <Play size={12} className="ml-0.5" fill="currentColor" />
          )}
        </button>
      </div>

      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-electric-blue/40 uppercase tracking-[0.2em] leading-none mb-1">
          {isPlaying ? "Now Playing" : "Tap to Play"}
        </span>
        <div className="overflow-hidden h-4 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span 
              key={isPlaying ? "playing" : "paused"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="text-sm font-bold text-electric-blue uppercase whitespace-nowrap"
            >
              Stonecutters — Dope Lemon
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
