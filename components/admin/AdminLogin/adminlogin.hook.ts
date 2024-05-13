import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { IAdminLoginValues } from "@modals/admin";
import network from "@services/network/network.service";
import { EndpointService, saveAccessTokenToStorage, saveRefreshTokenToStorage, saveUserIdToStorage } from "@services";

export const useAdminLogin = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleAdminLoginSubmit = async (values: IAdminLoginValues) => {
        setIsLoading(true);
        const payload = {
            email: values.email,
            password: values.password
        }
        try {
            const response = await network.post(EndpointService.adminLogin, payload);
            const { success, message } = response.data;
            if (!success) {
                console.error('admin login', response);
                toast.error(message);
                return;
            }
            const { accessToken, refreshToken, userId } = response.data.data;
            saveAccessTokenToStorage(accessToken);
            saveRefreshTokenToStorage(refreshToken);
            saveUserIdToStorage(userId)
            toast.success(message);
            router.replace('/admin');
        } catch (err) {
            console.error('admin login', err);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        handleAdminLoginSubmit,
        isLoading
    }
}