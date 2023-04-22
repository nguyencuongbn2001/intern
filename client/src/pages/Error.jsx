import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-6xl text-red-900">Oops!</h1>
      <p className="font-bold text-2xl mt-2">Sorry, an unexpected error has occurred.</p>
      <p className="font-bold text-2xl mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}