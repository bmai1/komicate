import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";

import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item";


export const NavigationSideBar = async () => {
    const profile = await currentProfile();

    if (!profile) return redirect("/")
    

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });


    return (
        <div className="flex items-center h-full text-primary w-full dark:bg-black/55 bg-[#E3E5E8] py-3 opacity-100">
           <NavigationAction />

           <Separator
                orientation="vertical"
                className="w-[2px] bg-zinc-500 dark:bg-zinc-700 rounded-md h-10 my-auto"
           />

           <ScrollArea className="w-full h-[75px] whitespace-nowrap">
                <div className="flex w-max space-x-2 p-2">
                    {servers.map((server) => (
                    <NavigationItem
                        key={server.id}
                        id={server.id}
                        name={server.name}
                        imageUrl={server.imageUrl}
                    />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

           <div className="pb-3 pr-3 mt-auto flex items-center flex-row gap-y-4">
                <ModeToggle />
                <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "h-[45px] w-[45px]"
                        }
                    }}
                />
           </div>
        </div>
    )
}