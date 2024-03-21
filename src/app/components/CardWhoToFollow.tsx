import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserPlus } from "lucide-react"
import { FC } from "react"

const CardWhoToFollow: FC = () => {
    return (
        <div className="p-4 rounded-lg bg-primary">
            <h2 className="font-bold">Who To Follow</h2>
            <div className="my-2 flex items-center justify-between rounded-md border">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Firza</p>
                </div>
                <UserPlus />
            </div>
            <div className="my-2 flex items-center justify-between rounded-md border">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Firza</p>
                </div>
                <UserPlus />
            </div>
            <div className="my-2 flex items-center justify-between rounded-md border">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Firza</p>
                </div>
                <UserPlus />
            </div>
            
        </div>
    )
}

export default CardWhoToFollow