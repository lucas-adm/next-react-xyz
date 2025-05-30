import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ItemProps extends React.HTMLAttributes<HTMLLIElement> {
    href: string;
    children: React.ReactNode
    text?: string;
}

export const Item = (props: ItemProps) => {

    const { href, children, text, ...rest } = props;

    const pathname = usePathname();

    const IconPlus: boolean = !text;

    return (
        <li className={clsx('cursor-pointer route-highlight', pathname === href && 'on')} {...rest}>
            <Link
                href={href}
                className={clsx(
                    'py-1',
                    'flex flex-col items-center',
                    'rounded-full',
                    IconPlus ? 'px-1 dark:bg-lighter/10 bg-darker/10' : ''
                )}
            >
                {children}
                <span className="text-2xs">{text}</span>
            </Link>
        </li>
    )

}