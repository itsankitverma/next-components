import React from 'react'
import { db } from '../lib/firebase'
import useFirebase from "../lib/useFirebase"

const Signin = () => {
    const { handleSignInWithGoogle } = useFirebase()
    return (
        <div className='flex min-h-screen justify-center items-center bg-purple-600'>
            <button onClick={handleSignInWithGoogle} className='p-3 border-black border-2 rounded-md bg-gray-900 hover:text-white flex gap-2 items-center justify-center'>
                <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" /> <span className='text-white '>Login with Google</span>
            </button>
        </div>
    )
}

export default Signin