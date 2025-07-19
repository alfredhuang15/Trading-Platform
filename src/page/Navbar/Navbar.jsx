import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../components/ui/sheet'
import { Button } from '../../components/ui/button'
import { GripHorizontal, Menu, SearchIcon } from 'lucide-react'
import { ModeToggle } from '../../components/mode-toggle'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import Sidebar from './Sidebar'


const Navbar = () => {
  return (
    <div className='flex px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 justify-between items-center'>
      <div className='flex items-center gap-3'>
        <Sheet>
  <SheetTrigger>
    <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
        <Menu className='h-7 w-7'/>
    </Button>
  </SheetTrigger>
  <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
    <SheetHeader>
      <SheetTitle>
        <div className='text-3xl flex justifiy-center items-center gap-1'>
            <Avatar>
                <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/33/bitcoin-6219349_1280.jpg"/>
            </Avatar>
            <div>
                <span className='font-bold text-orange-700'>Lightning</span>
                <span>Trade</span>
            </div>
        </div>
      </SheetTitle>
    </SheetHeader>
    <Sidebar/>
  </SheetContent>
        </Sheet>
        <ModeToggle/>
        <p className='text-sm lg:text-base cursor-pointer'> 
            Lightning Trade
        </p>
        <div className='p-0 ml-9'>
            <Button variant="outline" className="flex items-center gap-3">
                <SearchIcon/>
                <span>Search</span>
            </Button>
        </div>
    </div>
    <div>
        <Avatar>
            <AvatarFallback>
                Z
            </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar
