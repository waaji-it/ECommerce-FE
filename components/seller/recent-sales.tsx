import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Abdul</p>
          <p className="text-sm text-muted-foreground">abdul@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₹1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wajid</p>
          <p className="text-sm text-muted-foreground">wajidh@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₹3,499.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>RJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sahib</p>
          <p className="text-sm text-muted-foreground">sahib@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₹2,499.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Mohammed</p>
          <p className="text-sm text-muted-foreground">mohammed@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₹699.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ghouse</p>
          <p className="text-sm text-muted-foreground">Ghouse@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₹4,999.00</div>
      </div>
    </div>
  )
}

