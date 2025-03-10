import { Bone } from "@/components/Bone";
import { Section } from "../Section";

export const HeaderSkeleton = (props: React.HTMLAttributes<HTMLElement>) => {
    return (
        <header {...props}>
            <Section className="w-full h-[333px] p-4 mb-4 flex items-end gap-4 dark:bg-neutral-950 bg-neutral-50 animate-pulse">
                <Bone width={111} height={111} rounded="full" className="flex-none" />
                <div className="w-full flex flex-col gap-4">
                    <Bone width={144} height={36} rounded="md" />
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex gap-4">
                            <Bone width={111} height={36} rounded="md" />
                            <Bone width={111} height={36} rounded="md" />
                            <Bone width={111} height={36} rounded="md" />
                        </div>
                        <Bone width={111} height={36} rounded="3xl" />
                    </div>
                </div>
            </Section>
        </header>
    )
}