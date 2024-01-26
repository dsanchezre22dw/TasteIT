import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Typography,
    Tabs,
    TabsHeader,
    Tab,
    Switch,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
import AddShopping from "@/Pages/Dashboard/widgets/shoppingList/AddShopping";
import MainTitle from "@/Components/MainTitle";


export default function ShoppingList({auth, shoppingList}){
    
    return(
        <>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
            <CardBody className="p-4">
            <MainTitle title="Your Shopping List" />
            <AddShopping auth={auth} shoppingList={shoppingList} />
            </CardBody>
        </Card>
        </>
    )
}