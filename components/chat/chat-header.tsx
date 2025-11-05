import { db } from "@/lib/db";
import { UserAvatar } from "@/components/user-avatar";

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
            {type === "conversation" && (
                <UserAvatar 
                    src={imageUrl}
                    className="h-8 w-8 md:h-8 md:w-8 mr-2"
                />
            )}
            <p className="dark:text-white">{name}</p>
        </div>
    )
}