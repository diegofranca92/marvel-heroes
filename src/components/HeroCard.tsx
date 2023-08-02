import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function HeroCard({ id, name, thumbnail, description }: Hero.HeroCard) {
  return (
    <Card className="bg-blue-gray-50 rounded-3xl">
      <div className="flex w-[22rem] max-w-full h-52 max-h-fit flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none p-4 bg-blue-gray-50"
        >
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="card-image"
            className="h-full w-full object-cover rounded-3xl"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2 elipsis-title overflow-hidden">
            {name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal custom-elipsis overflow-hidden">
            {description.length ? description : 'Não possui descrição'}
          </Typography>
        </CardBody>
      </div>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          <Link to={`/profile/${id}`} className="text-center">
            Ver mais
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}