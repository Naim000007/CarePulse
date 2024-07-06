"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"

export enum FormFieldType {
    INPUT = "input",
    SELECT = "select",
    CHECKBOX = "checkbox",
    TEXTAREA = "textarea",
    SKELETON = "skeleton",
    PHONE_INPUT = "phoneInput",
    DATE_PICKER = "datePicker"
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function PatientForm() {
    // Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                {/* <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(555) 123-4567"
                    iconSrc="/assets/icons/phone.svg"
                    iconAlt="phone"
                /> */}
                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="01303202218"
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default PatientForm
