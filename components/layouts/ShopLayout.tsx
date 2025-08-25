import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export const ShopLayout = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header/AppBar convertido a Tailwind */}
        <header className="bg-primary-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-white text-xl font-bold">Crazy Licores</h1>
          </div>
        </header>

        {/* Main content */}
        <main className="min-h-[calc(100vh-80px)]">{children}</main>
      </div>
    </>
  );
};
