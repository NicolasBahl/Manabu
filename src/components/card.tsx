import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardUiProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const CardUi = (props: CardUiProps) => {
  const { icon, title, description } = props;
  return (
    <Card className="bg-manabuColor border-manabuColor justify-center items-center w-[400px] h-[220px] mt-2 mb-2">
      <CardHeader className={"text-center"}>
        <CardTitle className="flex justify-center text-white">{icon}</CardTitle>
        <CardDescription className={"py-2 text-slate-200 font-bold"}>
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <p
                className={
                  "text-center text-white line-clamp-3 overflow-hidden"
                }
              >
                {description}
              </p>
            </div>
            <div className="flex flex-col space-y-1.5"></div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardUi;
