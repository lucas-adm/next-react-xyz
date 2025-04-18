'use client';

import { Device } from "@/components/devices";
import { Search as RecentSearch } from "@/components/devices/desktop/navbar/dropdown/elements/Search";
import { useRef, useState } from "react";
import { useScreen, useStore, useUser } from "@/data/hooks";

const Search = () => {

    const { onMobile } = useScreen();

    const { searches } = useStore();
    const { user } = useUser();

    const [query, setQuery] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    if (!onMobile) return null;

    return (
        <section className="w-full h-full dark:bg-dark bg-lighter">
            <Device.Mobile.Header.SearchHeader ref={inputRef} query={query} setQuery={setQuery} />
            <ul
                className="w-[77%] m-auto py-2"
                onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
            >
                {searches(user).map((query, index) => (
                    <li key={index}>
                        <RecentSearch
                            query={query}
                            setter={() => setQuery(query)}
                            inputRef={inputRef}
                        />
                    </li>
                ))}
            </ul >
        </section>
    )

}

export default Search;