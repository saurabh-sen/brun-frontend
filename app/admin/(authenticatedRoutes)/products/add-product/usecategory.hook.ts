"use client";
import { RootState } from "@libs/store";
import { EndpointService } from "@services";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import network from "@services/network/network.service";
import { useEffect, useState } from "react";
import { setIsLoading } from "@libs/features/admin/adminAuth.slice";
import toast from "react-hot-toast";
import axios from "axios";
import { setCategories, setSubCategories } from "@libs/features/admin/addproduct.slice";

export const useCategory = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSubCategoryLoading, setIsSubCategoryLoading] = useState(false);
  const { isLoading } = useSelector(
    (state: RootState) => state.adminAuth
  );

  const { selectedCategory, selectedSubCategory, sizes, homepageProduct, completeTheLookProductId} = useSelector((state: RootState) => state.adminAddProductSlice)

  const handleGetSubCategories = async (categoryId: string) => {
    setIsSubCategoryLoading(true);
    try {
      const subCategoriesRes = await network.get(EndpointService.getSubCategoriesOfCategory+categoryId);
      console.log('subCategories response', subCategoriesRes)
      const subCategories = subCategoriesRes.data.data;
      dispatch(setSubCategories(subCategories));
      setIsSubCategoryLoading(false);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("get all categories error", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      }else {
        console.log("get all categories cancelled", error)
      }
      setIsSubCategoryLoading(false);
    }
  };

  useEffect(() => {
    const handleGetAllCategories = async (abortController: AbortController) => {
      dispatch(setIsLoading(true));
      try {
        const isAdminLoggedIn = await network.get(
          EndpointService.isAdminLoggedIn,
          {
            signal: abortController.signal,
          }
        );
        if (isAdminLoggedIn.data.statusCode === 200) {
          const response = await network.get(EndpointService.getAllCategories, {
            signal: abortController.signal,
          });
          const categories = response.data.data;
          dispatch(setCategories(categories))
          dispatch(setIsLoading(false));
        }else {
          toast.error("Something went wrong, please login again");
          router.replace("/admin/login");
          dispatch(setIsLoading(false));
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log("get all categories error", error);
          toast.error("Session expired, please login again");
          router.replace("/admin/login");
        }else {
          console.log("get all categories cancelled", error)
        }
        dispatch(setIsLoading(false));
      }
    };

    const abortController = new AbortController();
    handleGetAllCategories(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  console.log('re rendering')

  return {
    restOfTheFields: {
      selectedCategory, selectedSubCategory, sizes, homepageProduct, completeTheLookProductId,},
    isLoading,
    isSubCategoryLoading,
    handleGetSubCategories,
  };
};
