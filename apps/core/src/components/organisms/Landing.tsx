import * as React from 'react';
import { homePageImages, experienceTitles } from '@constants';
import NextLink from 'ui/components/atoms/NextLink';
import NextImage from 'ui/components/atoms/NextImage';

const Landing = (): JSX.Element => (
  <div className="flex h-screen snap-center flex-col items-center justify-center pt-20 md:pt-0">
    {/* /HStack */}
    <div className="flex items-center justify-center md:h-full">
      {/* Stack */}
      <div className="flex h-full flex-col items-center justify-center text-center md:h-1/2 md:w-1/2 md:items-start md:text-left">
        <h1 className="leading-3.25 mb-10 text-5xl font-bold text-white">
          A global community for you, built by people like you.
        </h1>
        <h2 className="mb-5 text-xl text-white">Please change this to something more meaningful</h2>
        <NextLink
          href="https://discord.gg/yafQvrZ8bQ"
          className="rounded-[90px] bg-purple-400 px-4 py-2 font-bold text-white hover:cursor-pointer hover:bg-purple-500"
        >
          Join the community
        </NextLink>
      </div>
      {/* Grid */}
      <div className="hidden h-1/2 grid-cols-3 grid-rows-3 gap-3 md:grid">
        {homePageImages.map((src: string, idx: number) =>
          idx === 4 || idx === 5 ? (
            <div key={src} className="h-40 w-40" />
          ) : (
            <div className="relative w-40 overflow-hidden rounded grayscale" key={src}>
              <NextImage
                src={src}
                alt={`black people in tech #${idx}`}
                width="172px"
                height="172px"
                objectFit="cover"
              />
            </div>
          ),
        )}
      </div>
    </div>
    {/* HStack */}
    <div className="mt-36 mb-6 w-full flex-col items-center text-center md:mt-0 md:flex md:flex-row md:justify-start md:space-x-3 md:text-left">
      <h2 className="text-4xl font-bold text-white md:text-7xl">600+</h2>
      {/* Stack */}
      <div className="flex w-full flex-col space-y-6 overflow-hidden">
        <h2 className="text-xl font-medium uppercase text-white">People like you: </h2>
        {/* HStack */}
        <div className="animate-slide flex space-x-3">
          {experienceTitles.map(title => (
            <span
              className="min-w-max rounded-md bg-[#333] p-2 font-medium uppercase text-[#e0e0e0]"
              key={title}
            >
              {title}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
