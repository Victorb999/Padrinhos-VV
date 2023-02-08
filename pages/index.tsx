import { useEffect, useState } from "react";

export default function IndexPage() {
  const [groomsmen, setGroomsmen] = useState<any[]>();

  const _groomsmenData = async () => {
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
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
      <h1 className="shadow-md flex items-center space-x-4 p-4">
        Next.js + TypeScript + Tailwind Css
      </h1>
      {groomsmen?.map((groomsman: any) => {
        return <div>{groomsman.slug}</div>;
      })}
    </div>
  );
}
