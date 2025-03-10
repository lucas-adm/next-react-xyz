import { Button } from "../desktop/layout/Button";
import { IconBook, IconEdit, IconFlame, IconNotes } from "@tabler/icons-react";
import { Layout } from "./layout";
import { LowDetailUser, User } from "@/core";
import { Photo } from "@/components/Photo";
import { PicturePortal } from "@/components/PicturePortal";
import { Portal } from "@/components/template/Portal";
import { useParams } from "next/navigation";
import { usePref, useUser } from "@/data/hooks";
import { useRef } from "react";

export const Header = ({ user, ...rest }: { user: User | LowDetailUser } & React.HTMLAttributes<HTMLElement>) => {

    const { pref: { useDarkTheme } } = usePref();
    const { user: currentUser } = useUser();

    const params = useParams<{ username: string }>();

    const photoRef = useRef<HTMLImageElement>(null);
    const upscaledPhotoRef = useRef<HTMLImageElement>(null);

    const isCurrentUserProfile = currentUser && currentUser.username === params.username;

    return (
        <header
            style={{ backgroundImage: `url('${user.banner ?? '/imgs/banner.png'}')` }}
            className="relative py-5 bg-cover bg-no-repeat bg-center"
            {...rest}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(${useDarkTheme ? 'rgba(0,0,0,.5), #0a0a0a 90%' : 'rgba(255,255,255, .5), #fafafa 90%'})`
                }}
            />
            <section className="relative z-10 flex flex-col items-center gap-3 ">
                <Photo ref={photoRef} user={user} size={111} className="cursor-pointer drop-shadow-[0_0_1px_rgba(0,0,0,0.33)]" />
                <Portal refElement={photoRef} refChild={upscaledPhotoRef}>
                    <PicturePortal ref={upscaledPhotoRef} user={user} size={270} className="rounded-full" />
                </Portal>
                <div className="w-full px-3 overflow-hidden flex items-center justify-center gap-3">
                    <Layout.Title>{user.display_name}</Layout.Title>
                    {isCurrentUserProfile &&
                        <Layout.Link href='/settings/profile'>
                            <IconEdit size={20} />
                        </Layout.Link>
                    }
                </div>
                {!isCurrentUserProfile && <Button user={user} />}
                <Layout.Nav>
                    <Layout.Li href={`/${user.username}`}><IconBook size={30} /></Layout.Li>
                    <Layout.Li href={`/${user.username}/notes`}><IconNotes size={30} /></Layout.Li>
                    <Layout.Li href={`/${user.username}/flames`}><IconFlame size={30} /></Layout.Li>
                </Layout.Nav>
            </section>
        </header>
    )
    
}