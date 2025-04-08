import { Button, InputText, PageHead } from "../components/app";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { getFirebaseErrorMessage } from "../utils/firebaseErrors";

const Forgot: NextPage = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setSuccess(false);

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error: any) {
      setError(getFirebaseErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHead
        title="Zaboravili ste lozinku | Biznis Centar"
        description="Resetujte vašu lozinku na Biznis Centru"
        keywords="zaboravljena lozinka, reset lozinke, biznis centar"
      />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-blue-100 md:basis-full lg:basis-4/12 lg:rounded-r-3xl relative overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
            alt="Business growth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-600/20" />
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Zaboravili ste lozinku?</h1>
            <p className="text-slate-700 mb-6">
              Unesite vašu email adresu i poslaćemo vam link za resetovanje lozinke.
            </p>
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                Link za resetovanje lozinke je poslat na vašu email adresu.
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
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white"
                disabled={loading}
              >
                {loading ? "Slanje..." : "Pošalji link"}
              </Button>
            </form>
            <p className="mt-3 mb-14 text-slate-700 text-center">
              <Link href="/login" className="text-blue-600 font-bold hover:text-blue-500 transition-colors">
                  Nazad na prijavu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
