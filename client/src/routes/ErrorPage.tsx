import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    console.error(error)

    if (isRouteErrorResponse(error)){
        return (
            <>
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                    <p className="font-bold">Error! {error.status}</p>
                    <p>{error.statusText}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
              <p className="font-bold">Error!</p>
              <p>An error occured!</p>
            </div>
        </>
    );
};

export default ErrorPage;
