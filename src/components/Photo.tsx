import { User } from "@/core";
import Image from "next/image";

interface PhotoProps extends React.HTMLAttributes<HTMLDivElement> {
    user: Partial<User>;
    size?: number;
    className?: string;
}

export const Photo = (props: PhotoProps) => {

    const { user, size = 30, className, ...rest } = props;

    if (user.avatar && user.username) {
        return (
            <figure style={{ width: size, height: size }} className={`overflow-hidden flex-none rounded-full ${className}`} {...rest}>
                <Image
                    src={user.avatar}
                    width={size}
                    height={size}
                    alt={`Avatar de ${user.username}`}
                    className="w-full h-full object-cover"
                />
            </figure>
        );
    }

    return null;

};