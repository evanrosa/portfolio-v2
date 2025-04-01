import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Welcome to EvRo.Dev
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to access your account
                    </p>
                </div>
                <SignIn
                    path="/sign-in"
                    appearance={{
                        elements: {
                            rootBox: "mx-auto",
                            card: "shadow-none",
                            headerTitle: "hidden",
                            headerSubtitle: "hidden",
                            socialButtonsBlockButton: "bg-white border border-gray-300 hover:bg-gray-50",
                            socialButtonsBlockButtonText: "text-gray-700",
                            formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
                            footerActionLink: "text-blue-600 hover:text-blue-700",
                        },
                    }}
                    fallbackRedirectUrl="/admin"
                    forceRedirectUrl="/admin"
                    routing="path"
                    signUpUrl="/sign-up"
                />
            </div>
        </div>
    );
} 