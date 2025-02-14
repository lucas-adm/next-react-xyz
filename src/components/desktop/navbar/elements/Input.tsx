import { IconSearch } from "@tabler/icons-react";
import { InputDropdown } from "../dropdown/contents/InputDropdown";
import { Search } from "../dropdown/elements/Search";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore, useUser } from "@/data/hooks";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {

    const { searches, setActions } = useStore();

    const { user } = useUser();

    const [query, setQuery] = useState<string>('');

    const ref = useRef<HTMLInputElement>(null);

    const router = useRouter();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!query.trim() || !ref.current) return;
        ref.current.blur();
        setActions({ searches: [query, ...searches(user).filter(q => q !== query)] }, user?.username);
        return router.push(`/search?q=${query}`);
    }

    return (
        <form onSubmit={onSubmit} className="relative flex items-center justify-between">
            <input
                ref={ref}
                className="outline-none
                    peer
                    inlg:w-[333px] w-[444px] py-[6px] px-4
                    text-sm dark:text-neutral-50 text-neutral-900
                    border-2 dark:border-neutral-50/15 border-neutral-900/15 rounded-s-3xl
                    dark:bg-neutral-900 bg-neutral-100
                    dark:focus:border-violet-600 focus:border-violet-600
                    dark:placeholder:text-neutral-100/30
                    transition-colors"
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                {...props}
            />
            <button
                aria-label="Consultar"
                className="cursor-pointer
                    py-[6px] px-4
                    border-2 border-transparent rounded-e-3xl
                    dark:bg-neutral-50/15 bg-neutral-900/15
                    dark:peer-focus:bg-violet-600 peer-focus:bg-violet-600
                    transition-colors"
            >
                <IconSearch size={20} className="text-white" />
            </button>
            {searches(user).length > 0 &&
                <InputDropdown>
                    {searches(user).map((query, index) => (
                        <Search
                            key={index}
                            query={query}
                            setter={() => { setQuery(query) }}
                            inputRef={ref}
                        />
                    ))}
                </InputDropdown>
            }
        </form>
    )

}