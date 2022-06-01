import { pillars } from '@constants';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

const Pillars = () => {
  const scrollingContainer = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const scrollBar: string =
    'absolute h-0.5 md:h-1/4 md:w-0.5 bg-purple-400 transition-all duration-500';

  const scrollMobile: string = classNames(scrollBar, {
    'left-0 w-[63px]': pos === 0,
    'left-[23%] w-[99px]': pos === 1,
    'left-[58%] w-[144px]': pos === 2,
  });

  const scrollDesktop: string = classNames(scrollBar, {
    'md:top-0 md:left-auto': pos === 0,
    'md:top-[39%] md:left-auto': pos === 1,
    'md:top-[75%] md:left-auto': pos === 2,
  });

  useEffect(() => {
    scrollingContainer.current?.scrollTo({
      top: 207 * pos,
      behavior: 'smooth',
    });
  }, [pos]);

  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-10 text-4xl font-medium text-white md:mb-40">What we&apos;re about</h1>
        <div className="h-4/5 w-full md:w-4/5">
          {/* HStack */}
          <div className="flex h-full flex-col md:flex-row ">
            {/* Stack */}
            <div className="relative flex w-full items-end justify-between text-center md:mr-4 md:flex-col">
              {pillars.map((pillar, idx) => (
                <div>
                  <div
                    key={pillar.label}
                    aria-hidden="true"
                    className="h-auto w-auto"
                    onClick={() => {
                      setPos(idx);
                    }}
                  >
                    <p className="mt-2 align-top text-lg text-slate-300 hover:text-purple-400 md:pr-2 md:align-bottom md:text-4xl">
                      {pillar.label}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#909090] md:top-0 md:right-0 md:left-auto md:bottom-auto md:h-full md:w-0.5" />
                </div>
              ))}
              <div className={`${scrollMobile} ${scrollDesktop}`} />
            </div>
            {/* Stack */}
            <div className="h-[207px] overflow-y-hidden" ref={scrollingContainer}>
              {pillars.map(pillar => (
                <div key={pillar.description} className="h-[207px] py-4 md:py-0 md:px-4">
                  <div className="mb-3 text-center md:mb-0">
                    <h2 className="text-3xl text-white  md:text-4xl">{pillar.heading}</h2>
                  </div>
                  <p className="text-base text-white md:text-xl">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;