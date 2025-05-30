'use client';

import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

interface LiProps extends LinkProps {
    icon: React.ElementType;
    fillIcon?: boolean;
    children: React.ReactNode;
}

export const Li = ({ icon: Icon, fillIcon, children, ...rest }: LiProps) => {

    const pathname: string = usePathname();
    const onRoute: boolean = rest.href === pathname;

    return (
        <li
            className={clsx(
                'relative',
                'py-3',
                'after:pointer-events-none after:absolute after:w-full after:left-0 after:bottom-0 after:border',
                onRoute ? ' after:border-primary' : 'after:border-transparent',
                'transition-all'
            )}
        >
            <Link
                className={clsx(
                    'whitespace-nowrap',
                    'py-[6px] px-2 inlg:px-1 rounded-md flex items-center gap-1 inlg:gap-[2px]',
                    'font-semibold text-md inlg:text-sm',
                    onRoute
                        ? 'text-primary dark:bg-primary/25 bg-primary/15'
                        : 'dark:text-white text-black bg-transparent',
                    !onRoute && 'dark:hover:bg-semilight/15 hover:bg-semidark/15',
                    'transition-colors'
                )}
                {...rest}
            >
                <Icon size={24} className={clsx(fillIcon && onRoute && 'fill-primary text-primary')} /> {children}
            </Link>
        </li>
    )

}