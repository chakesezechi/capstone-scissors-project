import '../App.css'

import db from '../firebase/firebase.tsx'
import { collection, onSnapshot, setDoc, doc } from 'firebase/firestore'

import { useState, useEffect } from 'react'
console.log(db)

function Url() {

  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const [alias, setAlias] = useState('')
  const [domain, setDomain] = useState('')
  const [urls, setUrls] = useState({})

  const [success, setSuccess] = useState(false)

  type urls = {
    [key: string]: string
  }

  const trimUrl = async (e: any) => {
    e.preventDefault()

    if (longUrl === '' || alias === '' || domain === '') {
      alert("Please check your entry")
      return
    }
    let shortURL: string = "shortly.vercel.com/" + longUrl.replace(/[^a-z]/g, '').slice(-6);
    setShortUrl(shortURL)

    if (!urls[shortURL as keyof typeof urls]) {
      setUrls({
        ...urls,
        [shortURL]: longUrl
      })

      alert("Your shortened URL is " + shortURL)


      const docRef = doc(db, "URLs", "URLs")
      const payload = { ...urls, [shortURL]: longUrl }
      await setDoc(docRef, payload)


      // db.collection("URLs").doc("URLs").set({
      //   [shortURL]: longUrl
      // })

      setLongUrl('')
      setAlias('')
      setDomain('')
      setSuccess(!success)
    }

    else {
      alert("This URL already exists")
      setSuccess(!success)
    }


  }

  useEffect(() => {
    const snap = async () => {
      await onSnapshot(collection(db, "URLs"), (snapshot) => {
        let data = snapshot.docs.map(doc => doc.data())

        // merge the data into an object
        let myData = Object.assign({}, ...data)
        console.log(myData)
        setUrls(myData)

      }
      );
    }

    snap()
  }, [])



  return (
    <>
      <div className="2xl:container h-auto m-auto url-bg">

        <div className="relative mx-auto lg:w-6/12 bg-white rounded-md max-w-lg">
          <div className="m-auto py-4 px-6 xl:w-10/12">

            <form action="" className="space-y-6 py-6">
              <div>
                <input
                  type="text" placeholder='Paste URL here ...'
                  className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-[#005AE2] text-[#005AE2] bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  value={longUrl}
                  onChange={(e) => {
                    setLongUrl(e.target.value)
                  }}
                />
              </div>
              <div className="flex justify-between gap-5">

                <div>
                  <input
                    type="text" placeholder='Choose Domain'
                    className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-[#005AE2] bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    value={domain}
                    onChange={(e) => {
                      setDomain(e.target.value)
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text" placeholder='Type Alias here'
                    className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-[#005AE2] bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    value={alias}
                    onChange={(e) => {
                      setAlias(e.target.value)
                    }
                    }
                  />
                </div>
              </div>



              <div>
                <button className="w-full px-6 py-3 rounded-full bg-[#005AE2] transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800" onClick={trimUrl}>
                  <span className="font-semibold text-white text-lg">Trim URL</span>
                </button>

                <p className="text-center text-sm text-[#005AE2] mt-4 w-">
                  By clicking TrimURL, I agree to the

                  <span className="text-[#005AE2] font-bold">
                    Terms of Service, Privacy Policy
                  </span>{' '}
                  and <span className="text-[#005AE2]">Use of Cookies</span>

                </p>{' '}


              </div>
            </form>
          </div>
        </div>
        {
          success &&
          <div className="view-url">
            <div className="close-modal">
              <button className="close-btn" onClick={() => {
                setSuccess(!success)
                setLongUrl('')
                setAlias('')
                setDomain('')
              }}>X</button>
            </div>
            <div className="url-container" >
              <img />
              <div className="link-info">
                <h1 className="link-title">
                  Hurray Your URL is shortened!
                </h1>
                <p className="url">
                  {shortUrl}
                </p>
                <button className="copy-btn">
                  Copy URL
                </button>
              </div>
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default Url