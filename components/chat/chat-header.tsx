import { UserAvatar } from "@/components/user-avatar";
import { Hash, MessageSquare, Mic, Video } from "lucide-react";
import { db } from "@/lib/db"
import { redirect } from "next/navigation";
import { ChannelType } from "@prisma/client";
import { SocketIndicator } from "@/components/providers/socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

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
    // Can't pass in a channel for channel.type icon mapping since chat headers also used for dms with server members, so just get server
    const iconMap = {
        [ChannelType.TEXT]: <Hash className="h-5 mr-2"/>,
        [ChannelType.AUDIO]: <Mic className="h-5 mr-2"/>,
        [ChannelType.VIDEO]: <Video className="h-5 mr-2"/>
    };
    let channelType = null;

    if (type === "channel") {
        const server = await db.server.findUnique({
            where: {
                id: serverId,
            },
            include: {
                channels: {
                    where: {
                        name: name
                    }
                },
            }
        });
        if (!server) return <div>Error finding server</div>;
    
        channelType = server.channels[0].type;
        if (!channelType) return <div>Error finding channel</div>;
    }
    
    return (
        <div></div>
        // <div className="px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
        //     {type === "channel" && channelType && iconMap[channelType] }
        //     {type === "conversation" && (
        //         <UserAvatar 
        //             src={imageUrl}
        //             className="h-8 w-8 md:h-8 md:w-8 mr-2"
        //         />
        //     )}
        //     <p className="dark:text-white">{name}</p>
        //     <div className="flex flex-row ml-auto">
        //         {type === "conversation" && (
        //             <ChatVideoButton />
        //         )}
        //         <SocketIndicator />
        //     </div>
        // </div>
    )
}