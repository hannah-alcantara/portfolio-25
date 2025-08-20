import Image from "next/image";

export default function Home() {
  return (
    <section className='px-6 py-20 text-center'>
      <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-8'>
        Hello World! I'm
      </h1>
      <div className='inline-block border-1 border-black rounded-full px-12 py-6 mb-8'>
        <span
          className='text-5xl md:text-8xl font-bold text-pink
        font-bowlby'
        >
          HANNAH
        </span>
      </div>
      <p className='max-w-lg mx-auto leading-relaxed'>
        a dedicated and enthusiastic Full Stack Developer with a passion for
        crafting exceptional and visually stunning web experiences
      </p>
    </section>
  );
}
