function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
      
      <div className="w-[420px] bg-gray-900/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl shadow-2xl shadow-amber-500/10 p-8">
        
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold tracking-wider mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Laya</span>
            <span className="text-white/80">Music</span>
          </div>
          <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-amber-400 mb-6">
          Welcome Back
        </h1>
        
        <form className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all"
            />
          </div>
          
          <div className="text-right">
            <a href="#" className="text-sm text-amber-500/70 hover:text-amber-400 transition">
              Forgot password?
            </a>
          </div>
          
          <button
            type="submit"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 p-3 rounded-lg font-semibold text-gray-950 transition-all duration-300 shadow-lg shadow-amber-500/25 active:scale-95"
          >
            Login
          </button>
          
          <p className="text-center text-gray-400 text-sm mt-2">
            Don't have an account?{' '}
            <a href="/register" className="text-amber-400 hover:text-amber-300 transition">
              Sign up
            </a>
          </p>
        </form>
        
      </div>
      
    </div>
  )
}

export default Login