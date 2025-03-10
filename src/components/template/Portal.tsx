import { createPortal } from "react-dom";
import { IconX } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

interface PortalProps {
    refElement: React.RefObject<HTMLElement>;
    refChild: React.RefObject<HTMLElement>;
    children: React.ReactNode;
}

export const Portal = ({ refElement, refChild, children }: PortalProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickOnRefElement = useCallback(() => {
        return setIsOpen((prev) => (!prev))
    }, [])

    const handleClickOnRefChild = useCallback((event: MouseEvent) => {
        if (refChild.current && !refChild.current.contains(event.target as Node)) {
            return setIsOpen(false);
        }
    }, [refChild])

    const handleClickKeyEsc = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') return setIsOpen(false);
    }, [])

    useEffect(() => {
        const refElmnt = refElement.current;
        if (refElmnt) refElmnt.addEventListener('click', handleClickOnRefElement);
        document.addEventListener('mousedown', handleClickOnRefChild);
        document.addEventListener('keydown', handleClickKeyEsc);
        return () => {
            if (refElmnt) refElmnt.removeEventListener('click', handleClickOnRefElement);
            document.removeEventListener('mousedown', handleClickOnRefChild);
            document.removeEventListener('mousedown', handleClickOnRefChild);
            document.removeEventListener('keydown', handleClickKeyEsc);
        }
    }, [handleClickKeyEsc, handleClickOnRefChild, handleClickOnRefElement, refChild, refElement])

    useEffect(() => {
        if (isOpen) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    if (isOpen) return createPortal(
        <section
            className="z-[999] fixed top-0 left-0
            w-screen max-w-full min-h-screen inmd:min-h-svh
            bg-[rgba(0,0,0,.5)] backdrop-blur-md"
        >
            <button
                className="fixed top-[23px] left-[27px]
                insm:left-1/2 insm:-translate-x-1/2
                p-1 rounded-full
                hover:bg-neutral-50/50 transition-colors"
            >
                <IconX size={24} color="white" />
            </button>
            {children}
        </section>,
        document.body
    )

}