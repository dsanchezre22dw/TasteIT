import {
    Card,
    CardBody,
  } from "@material-tailwind/react";

import AddFridge from "./widgets/AddFridge";
import MainTitle from "@/Components/MainTitle";
import Dashboard from '@/Layouts/DashboardLayout';


export default function FridgeIndex({auth, fridge}){
    
    return(
        <>
        <Dashboard auth={auth}>
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/assets/img/backgrounds/background-image.png')] bg-cover	bg-center">
                <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
            </div>
            <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
                <CardBody className="p-4">
                <MainTitle title="Your Fridge" />
                <AddFridge auth={auth} fridge={fridge} />
                </CardBody>
            </Card>
        </Dashboard>
        </>
    )
}