'use client';

import { createContext, useCallback, useState } from "react";
import { LowDetailNote, Page } from "@/core";

export interface UserNotesProps {
    page: Omit<Page<LowDetailNote>, 'content'>;
    notes: LowDetailNote[] | [];
    setNotes: (page: Page<LowDetailNote>) => void;
    setNewNote: (note: LowDetailNote) => void;
    clearNotes: () => void;
}

const UserNotesContext = createContext<UserNotesProps>({} as any);

export const UserNotesProvider = (props: any) => {

    const initialState = {
        page: {} as Omit<Page<LowDetailNote>, 'content'>,
        notes: [] as LowDetailNote[],
    }

    const [state, setState] = useState(initialState);

    const setter = useCallback((page: Page<LowDetailNote>): void => {
        const { content, ...rest } = page;
        return setState((prev) => ({
            page: rest,
            notes: [...prev.notes, ...content]
        }))
    }, [state])

    const setNewNote = useCallback((note: LowDetailNote): void => {
        return setState((prev) => ({
            page: prev.page,
            notes: [note, ...prev.notes]
        }))
    }, [])

    const clear = useCallback(() => { setState(initialState) }, []);

    return (
        <UserNotesContext.Provider value={{
            page: state.page,
            notes: state.notes,
            setNotes: setter,
            setNewNote: setNewNote,
            clearNotes: clear
        }}>
            {props.children}
        </UserNotesContext.Provider>
    )

}

export default UserNotesContext;