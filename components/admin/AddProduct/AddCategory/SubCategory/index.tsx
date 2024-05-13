import React from "react";
import { useDispatch } from "react-redux";
import { IProductSubCategory } from "@modals/admin";
import { setSelectedSubCategory } from "@libs/features/admin/addproduct.slice";

interface ISubCategory {
    title: string;
    options: IProductSubCategory[];
    isLoading: boolean;
}

const SubCategory = ({ title, options, isLoading }: ISubCategory) => {

    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleSelectValue = (option: IProductSubCategory) => {
        setValue(option.subcategory_name);
        setOpen(false);
        dispatch(setSelectedSubCategory(option.id))
    }

    return (
        <div className='flex flex-col gap-4 border border-gray-200 p-2 uppercase'>
            <div className="select-header flex justify-between items-center w-full" onClick={() => setOpen(!open)}>
                <p>{value ? value : title}</p>
                <span className={`material-symbols-rounded transition-all duration-200 ${open && 'rotate-180'}`}>
                    expand_more
                </span>
            </div>
            <div className={`select-body ${open ? 'flex flex-col border-t border-gray-200' : 'hidden'}`}>
                {
                    isLoading
                        ? <p>Loading...</p>
                        : options.length === 0
                            ? <p>No Category found</p>
                            : options.map((option, index) => (
                                <div key={index} className='select-option flex items-center gap-3 cursor-pointer' onClick={() => handleSelectValue(option)}>
                                    <p>{option.subcategory_name}</p>
                                </div>
                            ))
                }
            </div>
        </div>
    )
}

export default SubCategory;