"use client"

import {
    Tooltip,
    TooltipContent, 
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

interface ActionTooltipProps {


    label: string;
    children: React.ReactNode;
    side?: "top" | "start" | "bottom" | "left"

}