export const Main = (props: React.HTMLAttributes<HTMLElement>) => {
    return (
        <main
            className="flex flex-col gap-6 border-4 dark:border-black border-white"
            {...props}
        />
    )
}