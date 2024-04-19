"use client"
import { navList } from "@contants/admin.constant";
import { usePathname } from "next/navigation";

const SideNavList = () => {
    return (
        <div className="navbar__list w-[70%] flex flex-col justify-center gap-5">
            {
                navList.map((item, index) => (
                    <SideNavListItem key={index} icon={item.icon} text={item.text} href={item.href} />
                ))
            }
        </div>
    )
};

const SideNavListItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) => {

    const pathname = usePathname();

    const active: boolean = pathname === href && true;

    return (
        <a href={href} className={`navbar__list__item rounded-lg text-center py-3 flex pl-11 items-center hover:bg-[#3C3C3C] gap-5 ${active && 'bg-[#3C3C3C]'}`}>
            {icon}
            <span>{text}</span>
        </a>
    )
};

export default SideNavList;