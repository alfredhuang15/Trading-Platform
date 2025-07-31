import React from 'react'
import { Avatar, AvatarImage } from '../../components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Button } from '../../components/ui/button' 

const Withdrawal = () => {
  return (
    <div>
         <div className='p-5 lg:px-20'>
        <h1 className='font-bold text-3xl pb-5'>Withdrawal</h1>
        <Table className="border">
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">
        Date
      </TableHead>
      <TableHead>Method</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead className="text-right">Status </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1,1,1,1,1,1].map((item,index)=><TableRow key={index}>
    <TableCell>
      <p>2025/05/29 </p>
      <p className='text-gray-400'>14:39:12</p>
    </TableCell>
      <TableCell>$69249</TableCell>
      <TableCell>$69249</TableCell>
      <TableCell className="text-right">
          345
      </TableCell>
    </TableRow> )}
  </TableBody>
  </Table>
    </div>
    </div>
  )
}

export default Withdrawal
