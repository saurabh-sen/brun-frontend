'use client'

import AdminLogin from '@components/admin/AdminLogin'
import BrunLogo from '@components/common/BrunLogo'
import React from 'react'

const Login = () => {
  return (
    <section className="admin__auth flex min-h-screen">
      <div className="auth_sidebar_bg p-10 bg-black min-h-screen w-1/3">
        <BrunLogo isWhiteLogo />
      </div>
      <AdminLogin />
    </section>
  )
}

export default Login;