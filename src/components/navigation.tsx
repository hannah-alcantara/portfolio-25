import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <header className='flex justify-between items-center p-6 border-b border-black'>
      <div className='text-lg font-medium text-gray-800'>hannahalcantara</div>
      <nav className='flex gap-3'>
        <Button className='bg-green w-26'>Work</Button>
        <Button className='bg-pink w-26'>About</Button>
        <Button className='bg-blue w-26 '>Contact</Button>
      </nav>
    </header>
  );
}
