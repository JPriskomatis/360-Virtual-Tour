
import { Button } from "flowbite-react";

export function CoolButton( {btnTitle}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800">
        {btnTitle}
      </Button>
    </div>
  );
}
