import React from 'react';

const Footer = () => {
  const teamMembers = [
    { name: 'Jakkraphat Kattiya', id: '6513110' },
    { name: 'Thanakrit Chutiwongthanaphat', id: '6513112' },
    { name: 'Narawit Phakarat', id: '6513113' },
    { name: 'Ananda Kongkoed', id: '6513177' }
  ];

  return (
    <div id="footer" className="relative mt-8">
      <div className="bg-gradient-to-t from-gray-900 to-transparent min-h-[25vh] flex flex-col justify-between p-4">
        <div className="backdrop-blur-sm bg-purple-600/10 border border-purple-300/30 rounded-xl p-6 md:p-8 mx-auto w-full max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                MEET OUR<br />TEAM
              </h1>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-2xl pr-6 w-fit ml-auto
                           transform hover:-translate-y-1 hover:shadow-lg duration-200"
                >
                  <span className="font-medium">{member.name}</span>
                  <span className="ml-2 text-gray-500">{member.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 font-light py-4">
            Copyright © {new Date().getFullYear()} Mahidol University. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;