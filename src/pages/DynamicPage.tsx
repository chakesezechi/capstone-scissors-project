import { useParams, Navigate } from 'react-router-dom';
import db from '../firebase/firebase.tsx' 

import { collection, onSnapshot } from 'firebase/firestore'
import { useState } from 'react'

const DynamicPage = () => {
    const [URL, setURL] = useState({})
    const { id } = useParams()

    type URL = {
        [key: string]: string
    }

    const snap = async () => {
        await onSnapshot(collection(db, "URLs"), (snapshot) => {
            let data = snapshot.docs.map(doc => doc.data())

            // merge the data into an object
            let myData = Object.assign({}, ...data)
            console.log(myData)
            setURL(myData)

            let myUrl = `shortly.vercel.com/${id}`
            const url = URL[myUrl as keyof typeof URL]
            console.log(myUrl)
            console.log(URL["shortly.vercel.com/user" as keyof typeof URL])
            console.log(url)

            if (url === undefined) {
                // If the ID is not found in the URL object, redirect to a 404 page or another desired location
                console.log("got here")
                return <Navigate to="/404" />;
            }

            window.location.href = url; // Redirect to the external address
        });
    }

    snap();

    return (
        <div>
            {/* Placeholder content */}
            <h1>This is a dynamic page</h1>
        </div>
    );
};

export default DynamicPage;
