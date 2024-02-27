import { Button } from "@/app/_components/ui/button";
import {db} from "@/app/_lib/prisma";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopDetailsPageProps {
  params: {
    id: string;
  };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps)  => {
  if (!params.id) {
    // TODO: redirecionar para home page
    return null;
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });
  
  if (!barbershop) {
    // TODO: redirecionar para home page
    return null;
  }

  return  (
    <div>
      
      <div className="h-[250px] w-full relative">
        <Button size="icon" variant="outline" className=" z-50 absolute top-0 left-0">
          <ChevronLeftIcon />
        </Button>

        <Image src={barbershop.imageUrl } fill alt={barbershop.name}/>
      </div>
    </div>
  );
  
};

export default BarbershopDetailsPage;