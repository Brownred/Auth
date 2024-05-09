import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function SignUpCard() {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle className="text-centre text-3xl font-semibold">Create an Account</CardTitle>
                <CardDescription>Already have an account? Log in</CardDescription>
            </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
</Card>
    </div>
  )
}


