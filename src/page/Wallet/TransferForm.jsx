import React from 'react'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { DialogClose } from '../../components/ui/dialog'

const TransferForm = () => {
    const [formData, setFormData] = React.useState({
        amount:'',
        walletId:'',
        purpose:'',
    })
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = () => {
        console.log(formData)
    }
  return (
    <div className='pt-10 space-y-5'>
        <div>
            <h1 className='pb-1'>Enter Amount</h1>
            <Input name="amount" onChange={handleChange} value = {FormData.amount} className="py-7" placeholder="$9999"/>
        </div>
        <div>
            <h1 className='pb-1'>Wallet Id</h1>
            <Input name="walletId" onChange={handleChange} value = {FormData.amount} className="py-7" placeholder="#ADER455"/>
        </div>
        <div>
            <h1 className='pb-1'>Purpose</h1>
            <Input name="purpose" onChange={handleChange} value = {FormData.amount} className="py-7" placeholder="gift"/>
        </div>
        <DialogClose className="w-full">
            <Button onClick={handleSubmit} className="w-full py-7">
                Submit
            </Button>
        </DialogClose>      
    </div>
  )
}

export default TransferForm
