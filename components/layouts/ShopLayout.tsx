import { FC } from 'react';
import Head from 'next/head';
import { JsxElement } from 'typescript';
import Navbar from '../ui/Navbar';




interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: JSX.Element | JSX.Element[]
}

export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <nav>
            <Navbar />
        </nav>

        <main style={{
            margin: '16px auto',
            maxWidth: '1440px',
            padding: '0px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            { children }
        </main>
        
        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
        </footer>

    </>
  )
}