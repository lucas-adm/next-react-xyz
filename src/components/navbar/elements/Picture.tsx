import { User } from "@/core";
import Image from "next/image";

interface PictureProps {
    user: User;
}

export const Picture = (props: PictureProps) => {

    const { user } = props;

    return (
        <Image src={user.avatar} width={30} height={30} alt={`Avatar de ${user.username}`} className="rounded-full"/>
    )
}