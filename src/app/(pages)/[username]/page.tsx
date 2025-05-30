'use client';

import { IconAt, IconBalloon, IconBubbleText, IconUsers, IconUsersGroup } from "@tabler/icons-react";
import { LowDetailUser, toSpecificTime, User } from "@/core";
import { Overview } from "./overview";
import { Section } from "./components/Section";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useServices, useUser } from "@/data/hooks";

const Page = () => {

    const { userService: { getUser } } = useServices();

    const { isMounted, user: current } = useUser();

    const params = useParams<{ username: string }>();

    const [notFound, setNotFound] = useState<boolean>(false);
    const [user, setUser] = useState<User | LowDetailUser | null>(null);

    const isFetching = useRef<boolean>(false);
    useEffect(() => {
        const init = async () => {
            if (isFetching.current) return;
            if (current && params.username === current.username) return setUser(current);
            isFetching.current = true;
            try {
                return setUser(await getUser(params.username));
            } catch {
                return setNotFound(true);
            } finally {
                return isFetching.current = false;
            }
        }
        if (isMounted) init();
    }, [current, getUser, isMounted, params.username])

    if (notFound) return null;

    if (!user) return <Overview.Skeleton />;

    return (
        <Section>
            <header className="py-5 px-8 border-b dark:border-neutral-700/50 border-dark/10">
                <h2 className="font-semibold text-xl inmd:text-center">Visão Geral</h2>
            </header>
            <ul className="px-6 insm:px-0 grid grid-cols-2 insm:grid-cols-1 gap-x-6">
                <Overview.Info
                    href={`/${user.username}/followers`}
                    title={`Seguidores: ${user.followers_count}`}
                    subtitle="seguidores"
                    subtitleClassName="text-sm font-semibold"
                >
                    <IconUsersGroup size={28} />
                </Overview.Info>
                <Overview.Info
                    href={`/${user.username}/following`}
                    title={`Seguindo: ${user.following_count}`}
                    subtitle="seguindo"
                    subtitleClassName="text-sm font-semibold"
                >
                    <IconUsers size={28} />
                </Overview.Info>
                <Overview.Info
                    title="Entrou"
                    subtitle={`${toSpecificTime(user.created_at)}`}
                    subtitleClassName="text-sm"
                >
                    <IconBalloon size={28} />
                </Overview.Info>
                <Overview.Info
                    title="Usuário"
                    subtitle={`@${user.username}`}
                    subtitleClassName="text-sm"
                >
                    <IconAt size={28} />
                </Overview.Info>
                <Overview.Info
                    title="Mensagem"
                    subtitle={`${user.message ?? ''}`}
                    subtitleClassName="text-md italic"
                >
                    <IconBubbleText size={28} />
                </Overview.Info>
            </ul>
        </Section>
    )

}

export default Page;