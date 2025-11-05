"use client";

import { useSocket } from "@/components/providers/socket-provider";

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if (!isConnected) {
        return <div>Not connected</div>
    }

    return <div>Connected</div>
}