"use client";

import { useSocket } from "@/components/providers/socket-provider";

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if (!isConnected) {
        return <div className="text-neutral-500">not connected</div>
    }

    return <div className="text-neutral-500">connected</div>
}