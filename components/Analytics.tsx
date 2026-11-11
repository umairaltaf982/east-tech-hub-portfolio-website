import Script from 'next/script';

/* Google Analytics 4. Renders nothing until NEXT_PUBLIC_GA_ID is set, so the
   site ships clean and no cookies are written until you opt in.
   Add the ID in Vercel → Settings → Environment Variables, then redeploy. */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
