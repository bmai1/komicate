"use client";

import { Plus, Compass } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";


export const NavigationAction = () => {
    const { onOpen } = useModal();

    return (
        <div>
            <ActionTooltip
                side="right"
                align="center"
                label="Add a Server"
            >
            <button 
                onClick={ () => onOpen("createServer") }
                className="group flex items-center"
            >
                <div className="flex mx-3 h-[48px] w-[48px] rounded-[16px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-800 group-hover:bg-rose-700">
                    <div className="rounded-[24px] bg-neutral-700 dark:bg-neutral-200">
                        <Plus 
                        className="transition text-neutral-700 size={25}"
                        />
                    </div>
                </div>
            </button>
           </ActionTooltip>
           {/* Don't need explore button right now */}
           {/* <ActionTooltip
            side="right"
            align="center"
            label="Explore Servers"
           >
            <button 
                  className="pt-2 group flex items-center"
              >
                  <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                      <Compass 
                      className="group-hover:text-white transition text-emerald-500 size={25}"
                      />
                  </div>
              </button>
           </ActionTooltip> */}
        </div>
    )
}