'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { appConfig } from "@/utils/config"
import { useFormik } from "formik"
import { FC } from "react"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema"
import FormInput from "@/components/forms/FormInput"

const Register: FC = () => {

    const router = useRouter();

    const { baseUrl } = appConfig;

    const { values, touched, errors, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: RegisterValidationSchema,
        onSubmit: async (values) => {
            const { data } = await axios.get(
                baseUrl + `/users?email=${values.email}`
            )

            if (data.length) {
                return alert("email already exist")
            }

            await axios.post(baseUrl + "/users", {
                name: values.name,
                email: values.email,
                password: values.password,
                isVerify: false,
            })

            toast.success("Register Succes")
            router.push("/login")

        },
    })


    return (
        <main className="container mx-auto px-4">
            <div className="flex justify-center mt-4">
                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle className="text-center text-3xl text-primary">Welcome to SosMed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <FormInput
                                        label="Nama"
                                        name="name"
                                        placeholder="Name"
                                        type="text"
                                        value={values.name}
                                        error={errors.name}
                                        isError={!!touched.name && !!errors.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormInput
                                        label="Email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        value={values.email}
                                        error={errors.email}
                                        isError={!!touched.email && !!errors.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormInput
                                        label="Password"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        value={values.password}
                                        error={errors.password}
                                        isError={!!touched.password && !!errors.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                            <Button className="mt-6 w-full" type="submit">Register</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default Register