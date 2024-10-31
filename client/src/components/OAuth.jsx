import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'


function OAuth() {

  const navigator = useNavigate();
  const dispatch = useDispatch();

  const auth = getAuth(app);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);

      // TODO: Add logic to save user to database

      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
              name: resultFromGoogle.user.displayName,
              email: resultFromGoogle.user.email,
              photo: resultFromGoogle.user.photoURL
        }),
      }
      );

      const data = await response.json();
      if(response.ok){
        dispatch(signInSuccess(data));
        navigator('/');
      }

    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  }

  return (
    <Button
      onClick={signInWithGoogle}
      type='button'
      gradientDuoTone="purpleToBlue"
      outline
    >
      <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
      Continue with Google
    </Button>
  );
}

export default OAuth;
