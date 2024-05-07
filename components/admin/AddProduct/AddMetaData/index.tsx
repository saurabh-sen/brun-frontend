import MyBoxInput from "@components/admin/common/MyBoxInput"
import MyBoxTextArea from "@components/admin/common/MyBoxTextArea"

const AddMetaData = () => {
    return (
        <section id='addmetadata'>
            <h1 className="mb-6 mt-8">ADD NEW PRODUCT</h1>
            <MyBoxInput id="slugurl" label="SLUG URL" name="slugurl" type="url" className="mb-6" />
            <MyBoxInput id="metatitle" label="META TITLE" name="metatitle" type="text" className="mb-6" />
            <MyBoxTextArea id="metadescription" label="META DESCRIPTION" name="metadescription" className="mb-6" />
        </section>
    )
}

export default AddMetaData