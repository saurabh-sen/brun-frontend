import MyButton from '@components/common/MyButton'
import MyTextInput from '@components/common/MyTextInput'
import { IAdminLoginValues } from '@modals/admin/adminLogin.types'
import { ButtonType } from '@modals/common/common.types'
import { adminloginInitialValues, adminloginValidationSchema } from '@services/admin/adminLogin.service'
import { Form, Formik } from 'formik'
import Link from 'next/link'

const AdminLogin = () => {

    const handleAdminLoginSubmit = async (values: IAdminLoginValues) => {
        const payload = {
            email: values.email,
            password: values.password
        }
        try {
            // const result: IAdminLoginApiResponse = await callApi(adminLoginApi(payload));
            // const { accessToken, refreshToken, userId } = result.data;
            // saveAccessTokenToStorage(accessToken);
            // saveRefreshTokenToStorage(refreshToken);
            // saveUserIdToStorage(userId)
            // router.push('/');
            // TODO: set authstate, Redirect to dashboard '/admin
            console.log('Admin login', payload)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <main className='min-h-screen w-full flex justify-center items-center'>
            <section className="login w-64 sm:w-80 md:w-[649px]" id='login'>
                <legend className='flex flex-col justify-center items-center mb-11 '>
                    <h5>LOG IN INTO YOUR ACCOUNT</h5>
                    {/* {error.isError && <MyError errorMessage={error.message} />} */}
                </legend>
                <Formik
                    initialValues={adminloginInitialValues}
                    validationSchema={adminloginValidationSchema}
                    onSubmit={handleAdminLoginSubmit}
                >
                    <Form className='flex flex-col text-sm w-full'>
                        <MyTextInput
                            id='email'
                            label="Email Address"
                            name="email"
                            type="email"
                        />
                        <MyTextInput
                            id='password'
                            label="Password"
                            name="password"
                            type="password"
                            className='mt-8'
                        />
                        <Link href="/request-password-reset" className='underline decoration-1 mt-3'>FORGET YOUR PASSWORD?</Link>

                        <MyButton label='LOG IN' type={ButtonType.SUBMIT} />

                        <Link href="/signup" className='underline decoration-1 text-center mt-3'>CREATE AN ACCOUNT</Link>
                    </Form>
                </Formik>
            </section>
        </main>
    )
};

export default AdminLogin;