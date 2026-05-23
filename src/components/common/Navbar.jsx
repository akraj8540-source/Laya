import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-amber-500/50 shadow-2xl">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center h-16">
      <Link to="/" className="text-2xl font-bold tracking-wider group">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Laya</span>
        <span className="text-white/80 group-hover:text-amber-400 transition">Music</span>
      </Link>
      
      <div className="flex gap-8">
        <Link to="/" className="text-gray-300 hover:text-amber-400 transition text-lg">Home</Link>
        <Link to="/login" className="text-gray-300 hover:text-amber-400 transition text-lg">Login</Link>
        <Link to="/register" className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 hover:scale-105 transition-all">Register</Link>
      </div>
    </div>
  </div>
</nav>

    );
};  

export default Navbar;