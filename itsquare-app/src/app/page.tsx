import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute md:top-1/3 md:left-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 ">
        <h1 className="lg:text-9xl md:text-7xl text-6xl font-bold md:mb-16 mb-10">Hey,</h1>
        <h1 className="lg:text-9xl md:text-7xl text-4xl font-bold md:mb-16 mb-10">need help?</h1>
        <button className="border-md text-black md:text-4xl text-2xl text-center flex bg-yellow-300 md:p-4 py-4 md:px-12 px-6 rounded-full hover:bg-yellow-400 transition delay-180 duration-300 ease-in-out">Start building</button>
      </div>
    </div>
  );
}
