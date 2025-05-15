import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='flex items-center p-3 justify-center'>
      <SignUp />
    </div>
  )
  
}
