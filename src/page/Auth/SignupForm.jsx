import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/ui/button'
import { DialogClose } from '../../components/ui/dialog'
import { useDispatch } from 'react-redux'

const SignupForm = () => {
    const dispatch = useDispatch()
    const form = useForm({
        resolver:"",
        defaultValues:{
            fullName:"",
            email:"",
            password:"",
        }
    })
    const onSubmit=(data) => {
      dispatch(regiser(data))
        console.log(data)
    }
  return (
    <div>
      <h1 className='text-xl fond-bold text-center pb-3'>Create new Account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input
                            className="border w-full border-gray-700 p-5" placeholder="Name" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input //name="ifsc" 
                            className="border w-full border-gray-700 p-5" placeholder="Email" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
               <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input className="border w-full border-gray-700 p-5" placeholder="Password" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <Button type="submit" className="w-full py-5">
                Submit
            </Button>

        </form>
      </Form>
    </div>
  )
}

export default SignupForm
