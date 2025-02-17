import * as React from 'react';
import { experienceTitles } from '@constants';
import NextLink from 'ui/components/atoms/NextLink';
import Globe from '@components/organisms/Globe';

const Landing = (): JSX.Element => (
  <div className="flex h-screen flex-col items-center justify-center pt-20 md:pt-0">
    {/* /HStack */}
    <div className="flex flex-col items-center justify-center pt-40 md:h-full md:flex-row md:space-x-12 md:pt-0">
      {/* Stack */}
      <div className="flex h-full flex-col items-center justify-center text-center md:h-1/2 md:w-1/2 md:items-start md:text-left">
        <h1 className="mb-10 text-5xl font-bold text-white">
          A global place for you, built by people like you.
        </h1>
        <h2 className="mb-12 text-xl text-white">
          We&apos;re a community of like-minded Black developers, creatives, and people who just
          like to hang out.
        </h2>
        <NextLink
          href="https://discord.gg/zHpjKAQRsa"
          className="hover:border-brand-purple-500 relative h-min rounded-[90px] border border-transparent bg-black/25 px-4 py-3 font-bold text-white backdrop-blur-lg transition-all duration-200 hover:cursor-pointer"
        >
          Join the community
          <span className="animate-glow absolute left-0 h-1/2 w-full bg-[linear-gradient(137deg,#5ddcff,#5b44fd,#7B61FF)] p-4 blur-2xl" />
        </NextLink>
      </div>
      <Globe />
    </div>
    {/* HStack */}
    <div className="mt-36 mb-16 w-full flex-col items-center text-center md:mt-0 md:flex md:flex-row md:justify-start md:space-x-3 md:text-left">
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
