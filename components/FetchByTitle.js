import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'

const FetchByTitle = () => {
    useEffect(() => {
        const getData = () => {
            const db = getFirestore()
            const colRef = collection(db, 'books')

            const q = query(colRef, where('title', '==', 'A Suitable Boy.'))

            onSnapshot(q, (snapshot) => {
                let title = []
                snapshot.docs.map((doc) => {
                    title.push({ ...doc.data(), id: doc.id })
                })
                console.log(title)
            })
        }
        getData()
    }, [])
    return (
        <div>

        </div>
    )
}

export default FetchByTitle