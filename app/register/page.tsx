"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Check, Upload } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4
  const router = useRouter()

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Only redirect if we're on the final step
    if (step === totalSteps) {
      router.push("/success?type=registration")
    }
  }

  useEffect(() => {
    console.log(step)
  }, [step])

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Registration</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Complete the form below to register for the upcoming academic year at Amen Academy.
          </p>
        </div>

        <div className="relative mb-8">
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted"></div>
          <ol className="relative z-10 flex justify-between">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-center justify-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    step >= i
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background text-muted-foreground"
                  }`}
                >
                  {step > i ? <Check className="h-5 w-5" /> : i}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Student Information"}
                {step === 2 && "Parent/Guardian Information"}
                {step === 3 && "Academic History"}
                {step === 4 && "Additional Information"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Please provide the student's personal details"}
                {step === 2 && "Please provide contact information for parents/guardians"}
                {step === 3 && "Please provide information about previous education"}
                {step === 4 && "Please provide any additional information that may be relevant"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <RadioGroup id="gender" defaultValue="male" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Home Address</Label>
                    <Input id="address" placeholder="Street address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade Applying For</Label>
                    <Select>
                      <SelectTrigger id="grade">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="k">Kindergarten</SelectItem>
                        <SelectItem value="1">Grade 1</SelectItem>
                        <SelectItem value="2">Grade 2</SelectItem>
                        <SelectItem value="3">Grade 3</SelectItem>
                        <SelectItem value="4">Grade 4</SelectItem>
                        <SelectItem value="5">Grade 5</SelectItem>
                        <SelectItem value="6">Grade 6</SelectItem>
                        <SelectItem value="7">Grade 7</SelectItem>
                        <SelectItem value="8">Grade 8</SelectItem>
                        <SelectItem value="9">Grade 9</SelectItem>
                        <SelectItem value="10">Grade 10</SelectItem>
                        <SelectItem value="11">Grade 11</SelectItem>
                        <SelectItem value="12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <Tabs defaultValue="parent1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="parent1">Parent/Guardian 1</TabsTrigger>
                    </TabsList>
                    <TabsContent value="parent1" className="mt-6 space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="p1-first-name">First Name</Label>
                          <Input id="p1-first-name" placeholder="Enter first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="p1-last-name">Last Name</Label>
                          <Input id="p1-last-name" placeholder="Enter last name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="p1-relationship">Relationship to Student</Label>
                        <Select>
                          <SelectTrigger id="p1-relationship">
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="guardian">Legal Guardian</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="p1-email">Email</Label>
                          <Input id="p1-email" type="email" placeholder="Enter email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="p1-phone">Phone Number</Label>
                          <Input id="p1-phone" placeholder="Enter phone number" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="p1-address">Address (if different from student)</Label>
                        <Input id="p1-address" placeholder="Street address" />
                      </div>
                    </TabsContent>
                    <TabsContent value="parent2" className="mt-6 space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="p2-first-name">First Name</Label>
                          <Input id="p2-first-name" placeholder="Enter first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="p2-last-name">Last Name</Label>
                          <Input id="p2-last-name" placeholder="Enter last name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="p2-relationship">Relationship to Student</Label>
                        <Select>
                          <SelectTrigger id="p2-relationship">
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="guardian">Legal Guardian</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="p2-email">Email</Label>
                          <Input id="p2-email" type="email" placeholder="Enter email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="p2-phone">Phone Number</Label>
                          <Input id="p2-phone" placeholder="Enter phone number" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="p2-address">Address (if different from student)</Label>
                        <Input id="p2-address" placeholder="Street address" />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="space-y-2">
                    <Label htmlFor="emergency-contact">Emergency Contact (if different from above)</Label>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input id="emergency-name" placeholder="Full Name" />
                      <Input id="emergency-phone" placeholder="Phone Number" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="previous-school">Previous School</Label>
                    <Input id="previous-school" placeholder="Name of previous school" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="school-address">School Address</Label>
                      <Input id="school-address" placeholder="School address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school-phone">School Phone</Label>
                      <Input id="school-phone" placeholder="School phone number" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="dates-attended">Dates Attended</Label>
                      <Input id="dates-attended" placeholder="e.g., Sept 2022 - June 2024" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade-completed">Last Grade Completed</Label>
                      <Select>
                        <SelectTrigger id="grade-completed">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k">Kindergarten</SelectItem>
                          <SelectItem value="1">Grade 1</SelectItem>
                          <SelectItem value="2">Grade 2</SelectItem>
                          <SelectItem value="3">Grade 3</SelectItem>
                          <SelectItem value="4">Grade 4</SelectItem>
                          <SelectItem value="5">Grade 5</SelectItem>
                          <SelectItem value="6">Grade 6</SelectItem>
                          <SelectItem value="7">Grade 7</SelectItem>
                          <SelectItem value="8">Grade 8</SelectItem>
                          <SelectItem value="9">Grade 9</SelectItem>
                          <SelectItem value="10">Grade 10</SelectItem>
                          <SelectItem value="11">Grade 11</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Upload Academic Records</Label>
                    <div className="mt-2 flex items-center justify-center rounded-lg border border-dashed border-input p-6">
                      <div className="text-center">
                        <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                        <div className="mt-4 flex flex-col items-center">
                          <Button variant="outline" size="sm" type="button">
                            Select File
                          </Button>
                          <p className="mt-2 text-xs text-muted-foreground">PDF, JPG, or PNG (max. 5MB)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="medical">Medical Information</Label>
                    <Textarea
                      id="medical"
                      placeholder="Please list any medical conditions, allergies, or medications that the school should be aware of."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="special-needs">Special Educational Needs</Label>
                    <Textarea
                      id="special-needs"
                      placeholder="Please describe any special educational needs or accommodations required."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Extracurricular Interests</Label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                      {[
                        "Sports",
                        "Music",
                        "Art",
                        "Drama",
                        "Debate",
                        "Science",
                        "Technology",
                        "Math",
                        "Languages",
                        "Community Service",
                        "Student Government",
                        "Other",
                      ].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox id={`interest-${interest.toLowerCase()}`} />
                          <Label htmlFor={`interest-${interest.toLowerCase()}`}>{interest}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Please provide any additional information that may be relevant to the student's application."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          By submitting this form, I certify that all information provided is accurate and complete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep} disabled={step === 1} type="button">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              {step < totalSteps ? (
                <Button onClick={nextStep} type="button">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit">Submit Application</Button>
              )}
            </CardFooter>
          </Card>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Need help? Contact our admissions office at{" "}
            <Link href="mailto:admissions@amenacademy.edu" className="text-primary underline">
              admissions@amenacademy.edu
            </Link>{" "}
            or call{" "}
            <Link href="tel:+11234567891" className="text-primary underline">
              (123) 456-7891
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

