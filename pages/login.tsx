import { Button, InputText, PageHead } from "../components/app";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import { useState } from "react";
import { getFirebaseErrorMessage } from "../utils/firebaseErrors";

const Login: NextPage = () => {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(email, password);
      router.push("/explore");
    } catch (error: any) {
      setError(getFirebaseErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHead
        title="Prijava | Biznis Centar"
        description="Prijavite se na Biznis Centar i pronađite najbolje majstore i uslužne delatnosti!"
        keywords="prijava, biznis centar, usluge, majstori"
      />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-blue-100 md:basis-full lg:basis-4/12 lg:rounded-r-3xl relative overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Professional workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-600/20" />
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Dobrodošli nazad</h1>
            <p className="text-slate-700 mb-6">
              Prijavite se da biste nastavili da koristite naše usluge.
            </p>
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <InputText
                label="Email adresa"
                type="email"
                placeholder="Unesite vašu email adresu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InputText
                label="Lozinka"
                type="password"
                placeholder="Unesite vašu lozinku"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex justify-end mb-6">
                <Link href="/forgot" className="text-blue-600 hover:text-blue-500 transition-colors">
                    Zaboravili ste lozinku?
                </Link>
              </div>
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white"
                disabled={loading}
              >
                {loading ? "Prijavljivanje..." : "Prijavi se"}
              </Button>
            </form>
            <p className="mt-3 mb-14 text-slate-700 text-center">
              Nemate nalog?{" "}
              <Link href="/signup" className="text-blue-600 font-bold hover:text-blue-500 transition-colors">
                  Registrujte se ovde.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
