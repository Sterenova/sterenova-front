import { ButtonComponent } from "../Utils/ButtonComponent";

interface ErrorComponentProps {
    errorCode?: number;
    errorText?: string;
    errorDescription?: string;
    errorHref?: string;
    errorTextHref?: string;
}

export function ErrorComponent({ errorCode = 404, errorText = "Oops! Page Not Found", errorDescription = "It looks like you're lost at the party! Let's get you back to the fun.", errorHref = "/", errorTextHref = "Back to Home" }: ErrorComponentProps) {
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] text-white">
            <div className="text-center p-10">
                <h1 className="text-9xl font-extrabold text-white opacity-80">{errorCode}</h1>
                <h2 className="text-4xl font-bold mt-4">
                    {errorText}
                </h2>
                <p className="mt-4 text-lg">
                    {errorDescription}
                </p>
                <ButtonComponent href={errorHref} children={errorTextHref} className="mt-6 inline-block" />
            </div>
        </div>
    );
}
