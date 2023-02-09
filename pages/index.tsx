import { useEffect, useState } from "react";
import { Groomsmen } from "../services/types";

export default function IndexPage() {
  const [groomsmen, setGroomsmen] = useState<Groomsmen[]>();

  const _groomsmenData = async () => {
    const response = await fetch("/api/staticData", {
      method: "GET"
    });
    return response.json();
  };

  useEffect(() => {
    // call the function
    _groomsmenData().then(data => setGroomsmen(data.groomsmen));

    console.log("teste", groomsmen);
  }, []);

  return (
    <div className="p-4">
      {groomsmen?.map((groomsman: any) => {
        return (
          <div className="shadow-md flex flex-col items-center space-x-4 p-4">
            {groomsman.slug}
          </div>
        );
      })}
    </div>
  );
}
