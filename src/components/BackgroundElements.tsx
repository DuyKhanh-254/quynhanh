import { Heart, Sparkles, Star } from 'lucide-react';

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#ffd3df]/45 blur-3xl" />
      <div className="absolute top-[28%] -right-24 w-96 h-96 rounded-full bg-[#eadcff]/40 blur-3xl" />
      <div className="absolute bottom-0 left-[32%] w-96 h-96 rounded-full bg-[#dff4ef]/35 blur-3xl" />
      <Heart className="absolute top-32 left-[7%] text-primary-container animate-float" size={24} fill="currentColor" />
      <Sparkles className="absolute top-[42%] right-[7%] text-[#c6addb] animate-float-reverse" size={28} />
      <Star className="absolute bottom-[15%] left-[8%] text-[#edc98b] animate-float" size={22} fill="currentColor" />
    </div>
  );
}
