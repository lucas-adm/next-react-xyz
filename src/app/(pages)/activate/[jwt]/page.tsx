'use client';

import { Icon } from "@/components/icons";
import { SVG } from "@/components/svgs";
import { Template } from "@/components/templates";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useServices } from "@/data/hooks";
import Link from "next/link";

const Page = () => {

    const { userService: { activateUser } } = useServices();

    const params = useParams<{ jwt: string }>();

    const [isActive, setIsActive] = useState<boolean>(false);

    const [isFinished, setIsFinished] = useState<boolean>(false);

    const handleActivateUser = async (token: string) => {
        try {
            await activateUser(token);
            setIsActive(true);
        } catch {
            setIsActive(false);
        } finally {
            setIsFinished(true);
        }
    }

    useEffect(() => { handleActivateUser(params.jwt) }, []);

    return (
        <Template.Container className="flex insm:flex-col items-center justify-center gap-4">
            <SVG.Flare className="absolute -z-10" />
            {isFinished && (
                <>
                    <Link href={'/'} className="group pr-4 border-e dark:border-primary/25 border-primary/25">
                        <Icon.Logo width={100} height={0} />
                    </Link>
                    {isActive
                        ?
                        <h1 className="font-faculty font-light text-lg">
                            Conta ativada,{" "}
                            <span className="dark:text-lighter text-dark">
                                <Link href={'/signin'} className="underline
                                    p-1 rounded-lg
                                    font-normal
                                    transition-colors duration-300
                                    hover:bg-primary hover:text-lighter"
                                >
                                    acesse
                                </Link>.
                            </span>
                        </h1>
                        :
                        <h1 className="font-faculty font-light text-lg">Token inválido.</h1>
                    }
                </>
            )}
        </Template.Container>
    )

}

export default Page;