import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { VerifiedIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { Button } from '../../components/ui/button'
import AccountVerificationForm from './AccountVerificationForm'

const Profile = () => {

    const handleEnableTwoStepVerification=()=>{
        console.log("two step verification")
    }
  return (
    <div className='flex flex-col items-center mb-5'>
        <div className='pt-10 w-full lg:w-[60%]'>
            <Card>
                <CardHeader className="pb-9">
                    <CardTitle>Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='lg:flex gap-32'>
                        <div className='space-y-7'>
                            <div className='flex'>
                                <p className='w-[9rem]'>Email :</p>
                                <p className='text-gray-500'>bob@gmail.com</p>
                            </div>
                            <div className='flex'>
                                <p className='w-[9rem]'>Full Name :</p>
                                <p className='text-gray-500'>bob chen</p>
                            </div>
                            <div className='flex'>
                                <p className='w-[9rem]'>Date of Birth :</p>
                                <p className='text-gray-500'>25/09/2003</p>
                            </div>
                            <div className='flex'>
                                <p className='w-[9rem]'>Nationality :</p>
                                <p className='text-gray-500'>Canadian</p>
                            </div>
                        </div>
                        <div className='space-y-7'>
                            <div className='flex'>
                                <p className='w-[9rem]'>Email :</p>
                                <p className='text-gray-500'>bob@gmail.com</p>
                            </div>
                            <div className='flex'>
                                <p className='w-[9rem]'>Full Name :</p>
                                <p className='text-gray-500'>bob chen</p>
                            </div>
                            <div className='flex'>
                                <p className='w-[9rem]'>Date of Birth :</p>
                                <p className='text-gray-500'>25/09/2003</p>
                            </div>
                            <div className='flex'>
                                <p className='w-[9rem]'>Nationality :</p>
                                <p className='text-gray-500'>Canadian</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className='mt-6'>
                <Card className="w-full">
                    <CardHeader className="pb-7">
                        <div className='flex items-center gap-3'>
                            <CardTitle>2 Step Verification</CardTitle>
                            {true ?<Badge className="space-x-2 text-white bg-green-600">
                            <VerifiedIcon/>
                            <span>
                                Enabled
                            </span>
                            </Badge>: <Badge className="bg-orange-500">
                                Disable
                            </Badge> }
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>
                        <Dialog>
                            <DialogTrigger>
                                <Button>
                                    Enable two factor authentication
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>Verify your account</DialogTitle>
                                
                             </DialogHeader>
                             <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
                            </DialogContent>
                        </Dialog>
                        </div>
                    </CardContent>

                </Card>

            </div>
        </div>
    </div>
  )
}

export default Profile
