import MyBoxInput from '@components/admin/common/MyBoxInput'
import MyBoxTextArea from '@components/admin/common/MyBoxTextArea'
import React from 'react'

const AddBasicDetails = () => {
  return (
    <section id="addbasicdetails">
      <h1 className="mb-6 mt-8">BASIC DETAILS</h1>
      <MyBoxInput id="slugurl" label="SLUG URL" name="slugurl" type="url" className="mb-6" />
      <MyBoxTextArea id="writedescription" label="WRTIE DESCRIPTION" name="writedescription" className="mb-6" />
    </section>
  )
}

export default AddBasicDetails