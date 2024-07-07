import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'

const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container flex flex-col overflow-y-auto mb-6">
                <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        width={1000}
                        height={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />
                </div>
                <RegisterForm user={user} />
                <div className="text-14-regular mt-20 flex justify-between">
                    <p className="copyright text-center">© 2024 CarePulse</p>
                    {/* <Link href="/?admin=true" className="text-green-500">Admin</Link> */}
                </div>
            </section>
            <Image
                src="/assets/images/register-img.png"
                width={1000}
                height={1000}
                alt="patient"
                className="side-img max-w-[390px]"
            />
        </div>
    )
}

export default Register
