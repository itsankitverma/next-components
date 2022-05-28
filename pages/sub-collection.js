import { getAuth, signOut } from 'firebase/auth'
import { collection, doc, getDocs, getFirestore, onSnapshot, query, setDoc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFirebase from '../lib/useFirebase'

const SubCollection = () => {
    const [workData, setWorkData] = useState([])
    const { handleSignInWithGoogle, user } = useFirebase()
    const db = getFirestore()

    useEffect(() => {
        if (!user) {
            console.log("No user defined");
        } else {
            const getData = async () => {
              const db = getFirestore()
              const q = query(collection(db, 'users'))
              const snapshot = await getDocs(q)
              const data = snapshot.docs.map((doc)=>({
                  ...doc.data(), id:doc.id
              }))
              data.map(async (elem)=>{
                const workQ = query(collection(db, `users/${elem.id}/workInfo`))
                const workDetails = await getDocs(workQ)
                const workInfo = workDetails.docs.map((doc)=>({
                    ...doc.data(), id:doc.id
                }))
                setWorkData(workInfo);
              })
            }
            getData()

        }
    }, [user])

    const handleLogout = () => {
        const auth = getAuth()
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }

    const saveinfo = async () => {
        await setDoc(doc(db, "users", user.displayName), {
            name: user.displayName,
            email: user.email
        })
    }

    return (
        <div>
            {!user && <button onClick={handleSignInWithGoogle}>Signin with Google</button>}

            <div className='flex gap-5'>
                <div>
                    {user && <div className='flex flex-col gap-5 items-center justify-center'>
                        <p className='text-3xl font-bold'>Collection</p>
                        <div className='text-center w-full'>
                            <p >{user.displayName}</p>
                            <p>{user.email}</p>
                            <div className='flex items-center justify-center gap-6'>
                                <button onClick={handleLogout}>Logout</button>
                                <button onClick={saveinfo}>Save</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div>
                    {user && <div className='flex flex-col gap-5 items-center justify-center'>
                        <p className='text-3xl font-bold'>Sub-Collection</p>
                        <div>
                           {workData.map((elem)=>{
                               return(
                                   <div key={elem.id} className='w-full text-center'>
                                       <p>{elem.company}</p>
                                       <p>{elem.started}</p>
                                   </div>
                               )
                           })}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default SubCollection