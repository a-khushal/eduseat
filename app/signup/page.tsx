'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Smartphone, Lock, Eye, EyeOff, KeyRound } from 'lucide-react'

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    otp: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (step === 1) {
      // In a real application, you would validate the inputs here
      console.log('Validating inputs', formData)
      setStep(2)
    } else if (step === 2) {
      // In a real application, you would send the OTP here
      console.log('Sending OTP to', formData.phone)
      setStep(3)
    } else {
      // Handle final signup
      console.log('Sign up submitted', formData)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {step === 1 && (
                <>
                  <div>
                    <Label htmlFor="firstName" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>First Name</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Last Name</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Phone Number</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="flex items-center space-x-2">
                      <Lock className="w-4 h-4" />
                      <span>Create Password</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a strong password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        className="absolute right-0 top-0 h-full px-3 py-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {step === 2 && (
                <div>
                  <Label htmlFor="otp" className="flex items-center space-x-2">
                    <KeyRound className="w-4 h-4" />
                    <span>OTP</span>
                  </Label>
                  <Input
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    placeholder="Enter the OTP sent to your phone"
                    required
                  />
                </div>
              )}
              <Button type="submit" className="w-full">
                {step === 1 ? 'Continue' : step === 2 ? 'Verify OTP' : 'Sign Up'}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-gray-600">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

