'use client';

import { Bell } from "./elements/Bell";
import { Button } from "./elements/Button";
import { IconPlus } from "@tabler/icons-react";
import { Input } from "./elements/Input";
import { Menu } from "./elements/Menu";
import { Picture } from "./elements/Picture";
import { shouldUseUserContext } from "@/core";
import { useLoading, useScreen, useUser } from "@/data/hooks"
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {

    const pathname = usePathname();

    const shouldRender = shouldUseUserContext(pathname);

    const { onDesktop } = useScreen();

    const { isLoaded } = useLoading();

    const { user } = useUser();

    if (!shouldRender || !onDesktop || !isLoaded) return null;

    return (
        <nav className="
            sticky top-0 
            w-screen max-w-full h-[8vh] inmd:h-[8svh] p-4 
            flex items-center justify-between gap-4 
            dark:bg-neutral-900 bg-neutral-50
        ">
            {user
                ?
                <>
                    <div className="pl-2 flex gap-4 w-fit">
                        <Menu />
                        <Link href={'/'} className="flex items-center justify-center">
                            <Image src={'/imgs/logo.png'} width={99} height={0} alt="Logo" className="px-2" />
                        </Link>
                    </div>
                    <div>
                        <Input type="text" placeholder="Pesquisar" required />
                    </div>
                    <div className="pr-2 flex gap-4 w-fit">
                        <Button tooltip="Criar nova nota"><Link href={'/'}><IconPlus size={27} /></Link></Button>
                        <Button tooltip="Ver notificações"><Bell user={user} /></Button>
                        <Button><Picture user={user} /></Button>
                    </div>
                </>
                :
                <>
                    <div className="pl-2 flex gap-4 w-fit">
                        <Link href={'/'} className="flex items-center justify-center">
                            <Image src={'/imgs/logo.png'} width={99} height={0} alt="Logo" className="px-2" />
                        </Link>
                    </div>
                    <div>
                        <Input type="text" placeholder="Pesquisar" required />
                    </div>
                    <div className="pr-2 flex items-center justify-center gap-8 w-fit">
                        <Link href={'/explore'} className="underline-onhover font-semibold hover:text-violet-600 transition-colors">Explorar</Link>
                        <Link href={'/signin'} className="underline-onhover font-semibold hover:text-violet-600 transition-colors">Entrar</Link>
                    </div>
                </>
            }
        </nav>
    )

}