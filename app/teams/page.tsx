"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Teams from "../data/teams.json";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-8 pt-8">
        <AnimatedText
          text="Teams"
          el="h1"
          className="text-center text-4xl md:text-6xl font-serif pt-16 md:pt-28"
        />
      </div>
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search teams..."
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-96"
        />
      </div>
      <div className="px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-4 gap-4">
          {Teams &&
            Teams.map((team, index) => (
              <div
                className="relative flex flex-col items-center p-4 rounded-lg opacity-0"
                key={team.id}
                style={{
                  animation: `fadeIn 1s ease-in-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="relative group">
                  <img
                    src={team.logo}
                    alt={team.caption}
                    className="w-48 h-48 object-contain md:w-72 md:h-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-red-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
                    <div className="text-white text-lg text-center font-serif">
                      {team.caption}
                    </div>
                    <Link
                      href={`/teams/${team.id}`}
                      className="mt-2 px-4 py-2 border-2 border-white text-white rounded-md hover:bg-black transition-colors duration-300 flex items-center justify-center"
                    >
                      View Team
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
