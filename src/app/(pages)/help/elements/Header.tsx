import { clsx } from "clsx";
import { Icon } from "@/components/icons";
import { usePref } from "@/data/hooks";
import Link from "next/link";

export const Header = () => {

    const { pref: { useDarkTheme } } = usePref();

    return (
        <header>
            <Link
                href="/"
                target="blank"
                className={clsx(
                    'group overflow-hidden block',
                    useDarkTheme ? "dark-navigate-logo" : "light-navigate-logo",
                    'w-fit p-2 m-auto rounded-xl',
                    'border-2 dark:border-primary/25 border-primary/25',
                    'dark:bg-primary/20 bg-primary/10'
                )}
            >
                <Icon.Logo width={125} height={0} />
            </Link>
        </header>
    )

}