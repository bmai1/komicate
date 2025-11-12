"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";


interface NavigationItemProps {
    id: string;
    imageUrl: string;
    name: string;
};

export const NavigationItem = ({
    id,
    imageUrl,
    name
}: NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();

    const onClick = () => {
        router.push(`/servers/${id}`)
    }

    return (
        <ActionTooltip
            side="bottom"
            align="start"
            label={name}
        >
            <button
                onClick={onClick}
                className=""
            >
                <div className={cn(
                    "bg-primary rounded-full transition-all h-[4px]",
                    params?.serverId === id ? "w-[4px]" : "w-[4px] bg-red"
                )} />
                <div className={cn(
                    "relative group flex mx-1 h-[48px] w-[48px] rounded-[16px] group-hover:rounded-[16px] transition-all overflow-hidden",
                    params?.serverId === id && "bg-primary/10 text-primary rounded-[16px]"
                )}>
                    <Image 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={imageUrl}
                        alt="Channel"
                    />
                </div>
            </button>
        </ActionTooltip>
    )
}