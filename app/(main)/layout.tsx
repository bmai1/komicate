import { NavigationSideBar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <div className="flex w-full h-[75px] z-30 flex-row fixed inset-y-0">
                <NavigationSideBar />
            </div>
            <main className="h-full pt-[75px]">
                {children}
            </main>
        </div>
    );
}
 
export default MainLayout;