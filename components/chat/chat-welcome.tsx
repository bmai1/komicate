interface ChatWelcomeProps {
    name: string;
    type: "channel" | "conversation";
};

export const ChatWelcome = ({
    name,
    type,
}: ChatWelcomeProps) => {
    return (
        <div className="space-y-2 px-4">
       

        <p className="text-xl md:text-3xl font-bold">
            {type === "channel" ? "Welcome to #" : ""}{name}.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            This could be the start of something. 
        </p>
            
        </div>
    )
}