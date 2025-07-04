import { Icon } from "@/components/icons";
import { IconBell, IconSearch, IconSettings } from "@tabler/icons-react";
import { useNotifications } from "@/data/hooks";
import NextLink, { LinkProps } from "next/link";

export const Header = (props: React.HTMLAttributes<HTMLElement>) => {

    const { count } = useNotifications();

    const Link = ({ children, ...rest }: { children: React.ReactNode } & LinkProps) => {
        return (
            <NextLink
                className="relative p-1 rounded-full hover:dark:bg-lighter/10 hover:bg-dark/10 transition-colors"
                {...rest}
            >
                {children}
            </NextLink>
        )
    }

    return (
        <header
            className="py-2 px-4 flex items-center justify-end gap-4 dark:bg-darker bg-lighter"
            {...props}
        >
            <Icon.Logo width={77} height={0} className="mr-auto" />
            <Link href="/settings"><IconSettings /></Link>
            <Link href="/m/notifications">
                <IconBell />
                {count > 0 &&
                    <span
                        className="whitespace-nowrap absolute top-0 left-0 
                        w-5 h-w-5 flex items-center justify-center rounded-full 
                        text-sm text-lighter 
                        bg-primary"
                    >
                        {count}
                    </span>
                }
            </Link>
            <Link href={'/m/search'}><IconSearch /></Link>
        </header>
    )

}