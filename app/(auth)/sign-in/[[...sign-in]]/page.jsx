import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-4 overflow-hidden">
      <div className="bg-card shadow-xl rounded-lg p-8 max-w-md w-full relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-card-foreground">
            Welcome Back to <span className="text-indigo-600">Collabify</span>
          </h1>
          <p className="text-muted-foreground mt-2">Sign in to continue where you left off.</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" className="w-full" />
        </div>
        <div className="text-center mt-4">
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <a href="/sign-up" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
