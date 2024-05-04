"use client"
import { RootState } from "@libs/store";
import { useDispatch, useSelector } from "react-redux";
import MyOutlinedButton from "@components/common/MyOutlinedButton";
import { setIsEditAllOpen } from "@libs/features/admin/adminProductListing.slice";

const EditAndDelete = () => {

    const dispatch = useDispatch();
    const isEditAllOpen = useSelector((state: RootState) => state.adminProductListing.isEditAllOpen);

    const handleDelete = () => {
        console.log('Deleting all products');
    }

    const handleSetEditAll = (value: boolean) => {
        dispatch(setIsEditAllOpen(value))
    }


    return (
        <div className="flex items-center gap-3">
            {
                isEditAllOpen ?
                    <>
                        <MyOutlinedButton handleClick={() => handleSetEditAll(false)}>
                            <span className="flex items-center gap-1 text-sm">
                                <span className="material-symbols-rounded scale-50">
                                    arrow_back_ios
                                </span>
                                <span>BACK</span>
                            </span>
                        </MyOutlinedButton>
                        <MyOutlinedButton handleClick={handleDelete}>
                            DELETE ALL
                        </MyOutlinedButton>
                    </>
                    :
                    <MyOutlinedButton handleClick={() => handleSetEditAll(true)}>
                        EDIT ALL
                    </MyOutlinedButton>
            }
        </div>
    )
}

export default EditAndDelete;