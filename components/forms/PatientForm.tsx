"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
    INPUT = "input",
    SELECT = "select",
    CHECKBOX = "checkbox",
    TEXTAREA = "textarea",
    SKELETON = "skeleton",
    PHONE_INPUT = "phoneInput",
    DATE_PICKER = "datePicker"
}



export function PatientForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // Define a submit handler.
    async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        try {
            // const userData = { name, email, phone }
            // const user = await createUser(userData);
            // if (user) router.push(`/patients/${user.id}/register`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="space-y-4 mb-12">
                    <h1 className="header">Hi There👋</h1>
                    <p className="text-dark-700">
                        Schedule your first appointment
                    </p>
                </section>
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    label="Full Name"
                    placeholder="Naim Sheikh"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user" />
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="email"
                    label="Email"
                    placeholder="mdnaim01910423877@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email" />
                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="01303202218"
                />

                <SubmitButton isLoading={isLoading} >Get Started</SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm
