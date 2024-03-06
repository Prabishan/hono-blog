import {Avatar,AvatarFallback} from "@/components/ui/avatar";

const AppBar = () => {
  return (
    <div className="flex border-b px-10 py-2 justify-between items-center">
        <div>
      MEDIUM
        </div>
        <div>
        <Avatar>
        <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        </div>
    </div>
  );
};

export default AppBar;