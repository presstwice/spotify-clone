import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    href: string;
    active?: boolean;
}   

const SidebarItem: React.FC<SidebarItemProps> = ({ 
    icon: Icon, 
    label, 
    href, 
    active }) => {
        return (
            <Link href={href}
            className={twMerge(`
                flex
                flex-row
                h-auto
                items-center
                w-full
                gap-x-4
                text-md
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                py-1
            `,
                    active && "text-white"
            )}
            >
                <Icon size={24} />
                <p className="truncate w-full">{label}</p>
            </Link>
        );
}

export default SidebarItem;

