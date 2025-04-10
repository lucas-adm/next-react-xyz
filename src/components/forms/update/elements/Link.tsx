import { IconChevronRight } from "@tabler/icons-react";
import NextLink, { LinkProps } from "next/link";

export const Link = ({ children, ...rest }: { children: React.ReactNode } & LinkProps) => {
    return (
        <NextLink
            className="px-4 py-3 flex items-center gap-3
            hover:dark:bg-lighter/10 hover:bg-darker/10"
            {...rest}
        >
            <span className="flex-1">{children}</span>
            <IconChevronRight size={20} />
        </NextLink>
    )
}