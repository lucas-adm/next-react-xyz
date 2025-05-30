import { Component } from "@/components";
import { IconNotes } from "@tabler/icons-react";
import { LowDetailUser } from "@/core";
import { useRef } from "react";
import Link from "next/link";

interface CreatorProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    user: LowDetailUser
}

export const Creator = ({ user, ...rest }: CreatorProps) => {

    const ref = useRef<HTMLAnchorElement>(null);

    return (
        <>
            <Component.Hovercard ref={ref} user={user} />
            <Link ref={ref} href={`/${user.username}`} className="relative">
                <Component.Photo user={user} size={40} {...rest} />
                <div
                    className="absolute -bottom-1 -right-1
                    p-[2px] rounded-full
                    border-2 dark:border-dark border-light
                    bg-slate-400"
                >
                    <IconNotes size={18} className="text-white fill-primary" />
                </div>
            </Link>
        </>
    )

}