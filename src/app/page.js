
import Head from "next/head"
import Hero from "@/components/landing/hero"
import Clouds from "@/components/landing/logoClouds"
import Feature from "@/components/landing/feature"
import Testimonial from "@/components/landing/testimonial"
// import Pricing from "@/components/landing/pricing"
import Footer from "@/components/landing/footer"
export default function Landing(){

    return(<>
    {/* <head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
    </head>
     */}
    <Hero/>
    <Clouds/>
    <Feature/>
    {/* <Testimonial/> */}
    {/* <Pricing/> */}

    <Footer/>

    </>)
}
