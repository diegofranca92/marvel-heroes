import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function HeroCard({name, thumbnail, description}:Hero.HeroCard) {
  return (
    <Card className="w-full max-w-[24rem] h-48 max-h-fit flex-row bg-blue-gray-50 rounded-3xl">
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
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {name}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-ellipsis max-h-full overflow-hidden">
        {description ?? 'Não possui descrição'}
        </Typography>
        <a href="#" className="inline-block">
          <Link to={''} className="flex items-center gap-2">
            Ver mais
          </Link>
        </a>
      </CardBody>
    </Card>
  );
}