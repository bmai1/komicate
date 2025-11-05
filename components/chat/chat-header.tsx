import { db } from "@/lib/db";

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string;
}
export const ChatHeader = async ({
    serverId,
    name,
    type,
    imageUrl
}: ChatHeaderProps) => {
    

    return (
        <div className="px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
            <p className="dark:text-white">{name}</p>
        </div>
    )
}