import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../../components/ui/input-otp'
import { DialogClose } from '@radix-ui/react-dialog'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'

const AccountVerificationForm = () => {
    const [value,setValue] = useState("");

    const handleSubmit=()=>{
        console.log(value);
    }
  return (
    <div className='flex justify-center'>
        <div className='space-y-5 mt-10 w-full'>
            <div className='flex justify-between items-center'>
                <p>Email :</p>
                <p>bob@gmail.com</p>
                <Dialog>
                    <DialogTrigger>
                        <Button>
                            Sent OTP
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Enter OTP</DialogTitle>
                        </DialogHeader>
                        <div className='py-5 flex gap-10 justify-center items-center'>
                            <InputOTP value={value} onChange={(value)=>setValue(value)} maxLength={6}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                    <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                            <DialogClose>
                                <Button onClick={handleSubmit} className="w-[10rem]">
                                    submit
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>

        </div>
      
    </div>
  )
}

export default AccountVerificationForm
