import React, { useEffect } from "react";
import Head from "next/head";

export const BasicHead = ({ title }: { title?: string }) => {
 let publicUrl: string = ''
 useEffect(() => {
  publicUrl = window.location.origin
 }, [])
 return (
  <Head>
   <title>{title ? title : "Circon's - Your circle of experts!"}</title>
   <meta name="description" content="Generated by create next app" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />

   <link rel="apple-touch-icon" sizes="180x180" href="image/apple-touch-icon.png" />
   <link rel="icon" type="image/png" sizes="32x32" href="image/favicon-32x32.png" />
   <link rel="icon" type="image/png" sizes="16x16" href="image/favicon-16x16.png" />
   <link rel="manifest" href="image/site.webmanifest" />
   <link rel="mask-icon" href="image/safari-pinned-tab.svg" color="#5bbad5" />
   <meta name="msapplication-TileColor" content="#da532c" />
   <meta name="theme-color" content="#ffffff" />

   <meta property="og:title" content="Cisron's - Your circle of experts!" />
   <meta property="og:site_name" content="Cisron's" />
   <meta property="og:url" content="exemple.com" />
   <meta property="og:description" content="Business advisory, Accounting & Audit, Financial advisory, Legalisation, Cryptocurrency" />
   <meta property="og:type" content="book" />
   <meta property="og:image" content={publicUrl + "/image/circonOG.png"}></meta>
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
  </Head>
 )
}