"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useEffect, useState } from "react";


export const ModalProvider = () => {
    // prevent modal rendering on server side which causes hydration errors
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    
    return (
        <>
            <CreateServerModal />
        </>
    )
}