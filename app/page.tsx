import Link from 'next/link';
import { teachers } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-500 p-4 md:h-52">
        <h1 className={`${teachers.className} antialiased text-9xl text-gray-800 md:text-3xl md:leading-normal`}>Music Time!</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          <p className={`${teachers.className} antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Music Time!</strong> Focus on what it matters: <i>teach music</i>. We collected the most updated resources shared by music teachers to music teachers, substitutes, and homeschool teachers.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
          >
            <span>Start Here</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* <Image 
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className='hidden md:block'
            alt="Screenshots of the dashboard project showing desktop version"
          /> */}
          {/* <Image 
            src="/hero-mobile.png"
            width={560}
            height={620}
            className='block md:hidden'
            alt="Screenshots of the dashboard project showing desktop version"
          /> */}
        </div>
      </div>
    </main>
  );
}
