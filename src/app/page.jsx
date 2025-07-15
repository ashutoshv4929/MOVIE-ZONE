"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-8">MOVIE ZONE</h1>
          <p className="text-xl mb-8">
            Welcome to your movie streaming platform
          </p>

          <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl mb-6">Get Started</h2>
            <div className="space-y-4">
              <a
                href="/account/signin"
                className="block w-full bg-red-600 text-white py-3 px-6 rounded text-center hover:bg-red-700"
              >
                Sign In
              </a>
              <a
                href="/account/signup"
                className="block w-full bg-gray-700 text-white py-3 px-6 rounded text-center hover:bg-gray-600"
              >
                Sign Up
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Unlimited Movies</h3>
              <p className="text-gray-400">Watch thousands of movies anytime</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">HD Quality</h3>
              <p className="text-gray-400">Stream in high definition quality</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Any Device</h3>
              <p className="text-gray-400">Watch on phone, tablet, or TV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;