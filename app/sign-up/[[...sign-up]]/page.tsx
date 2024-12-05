"use client"

import * as React from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Page() {
  const { isLoaded, signUp, setActive } = useSignUp() // signUp is destructured from useSignUp
  const [verifying, setVerifying] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [code, setCode] = React.useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!isLoaded || !signUp) return null

    try {
      await signUp.create({
        emailAddress: email, 
      })

      await signUp.prepareEmailAddressVerification()

      setVerifying(true)
    } catch (err) {
      console.error('Error:', JSON.stringify(err, null, 2))
    }
  }

  async function handleVerification(e: React.FormEvent) {
    e.preventDefault()

    if (!isLoaded || !signUp) return null

    try {
      const signInAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })

        router.push('/')
      } else {
        console.error(signInAttempt)
      }
    } catch (err) {
      console.error('Error:', JSON.stringify(err, null, 2))
    }
  }

  if (verifying) {
    return (
      <>
        <h1>Verify your email address</h1>
        <form onSubmit={handleVerification}>
          <label htmlFor="code">Enter your verification code</label>
          <input
            value={code}
            id="code"
            name="code"
            onChange={(e) => setCode(e.target.value)}
          />
          <button type="submit">Verify</button>
        </form>
      </>
    )
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter email address</label>
        <input
          value={email}
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id='clerk-captcha'></div>
        <button type="submit">Continue</button>
      </form>
    </>
  )
}
