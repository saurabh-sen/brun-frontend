import * as yup from 'yup';
import { IAddProductValues } from '@modals/admin';

export const addProductValidationSchema = yup.object({
    slugurl: yup.string().required('Required'),
    metaTitle: yup.string().required('Required'),
    metaDescription: yup.string().required('Required'),
    productName: yup.string().required('Required'),
    productDescription: yup.string().required('Required'),
    productColorName: yup.string().required('Required'),
    productColorCode: yup.string().required('Required'),
    productSellPrice: yup.string().required('Required'),
    productDiscount: yup.string().required('Required'),
})

export const handleAddProduct = async (values: IAddProductValues) => {
    console.log(values);
}