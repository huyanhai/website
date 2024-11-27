'use client';

import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import DotPattern from '@/components/ui/dot-pattern';
// import HyperText from '@/components/ui/hyper-text';
import { cn } from '@/lib/utils';

import WalletCom from '@base/solana';

export default function Home() {
  return (
    <div className="bg-black p-48 h-screen">
      <WalletCom />
      {/* <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
        text
      </div>
      <AnimatedGradientText>
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          hello
        </span>
      </AnimatedGradientText>
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )}
      />
      <div className="h-screen"></div>
      <div className="h-screen"></div> */}
    </div>
  );
}
