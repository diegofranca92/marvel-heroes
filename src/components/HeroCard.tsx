import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HeroCard() {
  return (
    <Card className="w-full max-w-[24rem] h-48 max-h-fit flex-row bg-blue-gray-50 rounded-3xl">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none p-4 bg-blue-gray-50"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover rounded-3xl"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
        Wolverine
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-ellipsis max-h-full overflow-hidden">
        Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable .
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Ver mais
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}