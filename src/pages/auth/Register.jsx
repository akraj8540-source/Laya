import { useState } from 'react'
import { registerUser } from '../../api/auth.api'

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await registerUser(formData)

      console.log(data)
      alert('User Registered Successfully')

    } catch (error) {
      console.log(error)
      alert(error.response?.data?.message || 'Registration Failed')
    }
  }

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
          Create Account
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all"
              required
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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 p-3 rounded-lg font-semibold text-gray-950 transition-all duration-300 shadow-lg shadow-amber-500/25 mt-2 active:scale-95"
          >
            Register
          </button>
          
          <p className="text-center text-gray-400 text-sm mt-2">
            Already have an account?{' '}
            <a href="/login" className="text-amber-400 hover:text-amber-300 transition">
              Sign in
            </a>
          </p>
        </form>
        
      </div>
      
    </div>
  )
}

export default Register