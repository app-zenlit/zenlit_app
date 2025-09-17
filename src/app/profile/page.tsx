'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import AppHeader from '@/components/AppHeader';
import Image from 'next/image';
import { Instagram, Linkedin, MessageSquare, Edit3 } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const ProfileScreen = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Mock user data - replace with actual user data
  const user = {
    name: "Alex Johnson",
    username: "alexj",
    bio: "Digital creator passionate about technology, design, and innovation. Always exploring new ways to connect and create meaningful experiences.",
    coverPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    socialLinks: {
      instagram: "https://instagram.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
      twitter: "https://twitter.com/alexj"
    },
    posts: [
      {
        id: 1,
        content: "Just finished an amazing project! The intersection of design and technology never ceases to amaze me.",
        timestamp: "2 hours ago",
        likes: 24,
        comments: 8
      },
      {
        id: 2,
        content: "Beautiful sunset from my office window today. Sometimes you need to pause and appreciate the simple moments.",
        timestamp: "1 day ago",
        likes: 42,
        comments: 12
      },
      {
        id: 3,
        content: "Excited to share my latest thoughts on the future of digital experiences. Link in bio!",
        timestamp: "3 days ago",
        likes: 67,
        comments: 23
      }
    ]
  };

  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
  };

  const handleMenuClick = (action: string) => {
    setDropdownOpen(false);
    switch (action) {
      case 'edit':
        console.log('Edit profile clicked');
        // Add edit profile functionality here
        break;
      case 'feedback':
        console.log('Feedback clicked');
        // Add feedback functionality here
        break;
      case 'logout':
        console.log('Logout clicked');
        // Add logout functionality here
        break;
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-black">
        <div className="max-w-2xl mx-auto px-4">
          <AppHeader 
            title="Profile" 
            right={
              <div className="relative">
                {/* Hamburger Menu Button */}
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Menu"
                >
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 z-50">
                    <div className="py-2">
                      <button
                        onClick={() => handleMenuClick('edit')}
                        className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors flex items-center space-x-2"
                      >
                        <Edit3 className="w-4 h-4" />
                        <span>Edit Profile</span>
                      </button>
                      <button
                        onClick={() => handleMenuClick('feedback')}
                        className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors flex items-center space-x-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Feedback</span>
                      </button>
                      <button
                        onClick={() => handleMenuClick('logout')}
                        className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            }
          />
          
          {/* Cover Photo Section */}
          <div className="relative mb-8">
            {/* Cover Photo */}
            <div className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden">
              <Image
                src={user.coverPhoto}
                alt="Cover photo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="mb-8">
            {/* Profile Layout - Left aligned with social icons beside */}
            <div className="flex items-start gap-6 mb-6">
              {/* Profile Photo - left side with rounded square */}
              <div className="relative -mt-16 flex-shrink-0">
                <Image
                  src={user.profilePhoto}
                  alt={`${user.name}'s profile`}
                  width={120}
                  height={120}
                  className="w-30 h-30 rounded-2xl object-cover border-4 border-black"
                  priority
                />
                
                {/* User Info - below profile picture */}
                <div className="mt-4">
                  <h2 
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {user.name}
                  </h2>
                  <p 
                    className="text-gray-400 mb-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    @{user.username}
                  </p>
                </div>
              </div>

              {/* Social Links - positioned between end of dp and end of cover photo */}
                <div className="flex flex-col justify-center items-center flex-1 -mt-4">
                  <div className="flex space-x-4">
                    {user.socialLinks.instagram && (
                      <button
                        onClick={() => handleSocialClick('instagram', user.socialLinks.instagram!)}
                        className="p-0 hover:scale-110 transition-transform"
                        aria-label="Instagram"
                      >
                        <div className="w-10 h-10 rounded-lg" style={{
                          background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Instagram className="w-6 h-6" style={{ color: 'white' }} />
                        </div>
                      </button>
                    )}
  
                    {user.socialLinks.linkedin && (
                      <button
                        onClick={() => handleSocialClick('linkedin', user.socialLinks.linkedin!)}
                        className="p-0 hover:scale-110 transition-transform"
                        aria-label="LinkedIn"
                      >
                        <div className="w-10 h-10 rounded-sm" style={{
                          background: '#0077B5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <svg className="w-6 h-6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3z" fill="#0077B5"/>
                            <path d="M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="white"/>
                          </svg>
                        </div>
                      </button>
                    )}
  
                    {user.socialLinks.twitter && (
                      <button
                        onClick={() => handleSocialClick('twitter', user.socialLinks.twitter!)}
                        className="p-0 hover:scale-110 transition-transform"
                        aria-label="X (Twitter)"
                      >
                        <div className="w-10 h-10 rounded-sm" style={{
                          background: '#000000',
                          border: '1px solid #333',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaXTwitter className="w-5 h-5" style={{ color: 'white' }} />
                        </div>
                      </button>
                    )}
                  </div>
                </div>
            </div>

            {/* Bio Section */}
            <div className="mb-6">
              <p 
                className="text-gray-300 text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {user.bio}
              </p>
            </div>
          </div>

          {/* Posts Section */}
          <div className="mb-8">
            <h3 
              className="text-xl font-semibold text-white mb-6"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Posts
            </h3>
            
            <div className="space-y-4">
              {user.posts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-gray-900 rounded-xl p-4 transition-all duration-300 hover:bg-gray-800"
                  style={{boxShadow: '2px 2px 4px rgba(255, 255, 255, 0.1)'}}
                >
                  <p 
                    className="text-white text-base leading-relaxed mb-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {post.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span style={{ fontFamily: 'var(--font-inter)' }}>
                      {post.timestamp}
                    </span>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-white transition-colors">
                        <span>❤️</span>
                        <span>{post.likes}</span>
                      </button>
                      
                      <button className="flex items-center space-x-1 hover:text-white transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfileScreen;
