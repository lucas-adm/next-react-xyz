'use client';

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useScreen } from "@/data/hooks";

export const SimpleHeader = ({ title, ...rest }: { title: string } & React.HTMLAttributes<HTMLHeadingElement>) => {

    const { onMobile } = useScreen();

    const router = useRouter();

    if (!onMobile) return null;

    return (
        <header className="w-full p-2 flex items-center justify-between gap-2 dark:bg-neutral-950 bg-neutral-50" {...rest}>
            <button
                aria-label="Voltar"
                className="p-1 rounded-full
                    hover:dark:bg-neutral-50/10 hover:bg-neutral-900/10 transition-colors"
                onClick={() => router.back()}
            >
                <IconArrowLeft />
            </button>
            <h1 className="w-full m-auto text-lg">{title}</h1>
        </header>
    )

}