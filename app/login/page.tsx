import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";
import "./styles.css";
import { KeyIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
        <div className="flex justify-center">
          <div className="parent">
            Email - user@nextmail.com <br />
            Pass- 123456
            <div className="child">
              <div className="bg-white rounded-full h-8 w-8 flex justify-center align-middle content-center">
                <KeyIcon className="h-6 w-6 text-yellow-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
