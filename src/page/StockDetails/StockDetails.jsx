import React from 'react'
import { Avatar, AvatarImage } from '../../components/ui/avatar'
import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from '@radix-ui/react-icons'
import { Button } from '../../components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import TradingForm from './TradingForm'
import StockChart from '../Home/StockChart'

const StockDetails = () => {
  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between'>
        <div className='flex gap-5 items-center'>
          <div>
            <Avatar>
              <AvatarImage src={"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"}/>
            </Avatar>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <p>BTC</p>
              <DotIcon className='text-gray-400' />
              <p className='text-gray-400'>Bitcoin</p>

            </div>
            <div className='flex items-end gap-2'>
              <p className='text-xl fond-bold'>$6555</p>
              <p className='text-red-600'>
                <span>-123586374846.578</span>
                <span>(-0.29803%)</span>
              </p>

            </div>
          </div>

        </div>
        <div className='flex items-center gap-4'>
          <Button>
            {true? <BookmarkFilledIcon className='h-6 w-6'/>: <BookmarkIcon className='h-6 w-6'/>}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Trade</DialogTitle>
              </DialogHeader>
              <TradingForm/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='mt-14'>
        <StockChart/>
      </div>
    </div>
  )
}

export default StockDetails
