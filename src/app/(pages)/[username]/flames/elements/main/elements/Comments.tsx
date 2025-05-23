import { clsx } from "clsx";
import { IconMessageCircle, IconMessageCircleOff } from "@tabler/icons-react";
import { LowDetailNote } from "@/core";
import Link from "next/link";

export const Comments = ({ note }: { note: LowDetailNote }) => {

    const { id, user: { username }, closed: isClosed, comments_count: count } = note;

    return (
        <Link
            href={`/${username}/${id}`}
            className={clsx(
                isClosed && 'pointer-events-none cursor-not-allowed select-none',
                'px-2 py-1 insm:p-1 rounded-md insm:rounded-full',
                'flex items-center gap-1',
                'insm:dark:bg-lighter/25 insm:bg-darker/25',
                'hover:dark:bg-semidark hover:bg-semilight',
                'hover:dark:drop-shadow-alpha-l-sm hover:drop-shadow-alpha-d-sm',
                'active:scale-110',
                'transition-all'
            )}
        >
            <span>
                {isClosed
                    ? <IconMessageCircleOff className="insm:!text-white" />
                    : <IconMessageCircle className="insm:!text-white" />
                }
            </span>
            {count > 0 &&
                <span className="text-sm">
                    {count}
                </span>
            }
            <span className="insm:hidden text-sm">
                {isClosed ? 'Fechado' : count > 0 ? count > 1 ? 'Comentários' : 'Comentário' : 'Comentar'}
            </span>
        </Link>
    )

}