import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {app} from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice';

function Oath() {
    const dispatch = useDispatch();
    const handleGg = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
        } catch (error) {
            console.log("could not login with google", error)
        }
    }

  return (
    <button type='button' onClick={handleGg} className='uppercase bg-red-700 rounded-lg text-white hover:opacity-95'>Continue with Google</button>
  )
}

export default Oath