import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-model";

const SetupPage = async () => {
    const profile = await initialProfile();
    
    // search servers and find first one with matching profile id in one of the members 
    // to verify this profile is a member of that server
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (server) return redirect(`/servers/${server.id}`);



    return <InitialModal />;
}

export default SetupPage