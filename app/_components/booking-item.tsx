
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return (  
    <Card className="mx-5">
        <CardContent className="p-5  flex justify-between py-0">
            <div className="flex flex-col gap-2 py-5">
                <Badge className="bg-[#221c3d] text-primary hover:bg-[#221c3d] w-fit">Confirmado </Badge>

                <h2 className="font-bold"> Corte de Cabelo</h2>

                <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"/>

                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>

                    <h3>Vintage Barber</h3>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
                <p className="text-sm">Fevereiro</p>
                <p className="text-2xl">06</p>
                <p className="text-sm">10:00</p>

    

            </div>
        </CardContent>
    </Card>
    );
}
 
export default BookingItem;