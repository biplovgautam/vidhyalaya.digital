"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/team/member1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "/team/member2.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Head of Product",
    image: "/team/member3.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Lead Designer",
    image: "/team/member4.jpg",
  },
];

export default function OurStory() {
  return (
    <div className="page-shell relative min-h-screen overflow-hidden bg-[#373643] text-white">
      <div className="hero-gradient" aria-hidden />
      
      {/* Header */}
      <header className="glass-nav fixed top-3 left-3 right-3 z-30 mx-auto w-auto max-w-6xl px-3 py-1.5 sm:px-6 md:inset-x-0 md:top-6 md:px-8 md:py-1.5">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
            <span className="text-sm font-semibold">Back to Home</span>
          </Link>
          <Image
            className="rounded-xl"
            src="/logo.png"
            alt="Digital Vidhyalaya"
            width={40}
            height={40}
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the team behind Digital Vidhyalaya, dedicated to transforming education in Nepal.
            </p>
          </div>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-1">
                    <div className="relative overflow-hidden rounded-xl bg-[#2a2936] p-6 transition-all duration-300 group-hover:bg-[#323041]">
                      {/* Image Placeholder */}
                      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                        <div className="flex h-full items-center justify-center text-6xl font-bold text-white/30">
                          {member.name.charAt(0)}
                        </div>
                      </div>
                      
                      {/* Member Info */}
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
