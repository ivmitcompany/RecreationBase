'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import './be-styles.css';

const BeBookingForm: React.FC = (): JSX.Element => {
    const bookingForm = (w: any) => {
        // @ts-ignore
        !function(n){
            var q =[
                ["setContext", "BE-INT-logindariy-in-ua_2025-03-28", "uk"],
                ["embed", "booking-form", {
                    container: "be-booking-form"
                }],
                ["embed", "search-form", {
                    container: "be-search-form"
                }]
            ];
            var t=n.bookingengine=n.bookingengine||{},o=t.integration=t.integration||{};if(o.__cq=o.__cq?o.__cq.concat(q):q,!o.__loader){o.__loader=!0;
                // @ts-ignore
                var i=n.document,a=i.getElementsByTagName("head")[0]||i.getElementsByTagName("body")[0];function r(n){c(n.split("\n"),0)}
                // @ts-ignore
                function c(e,t){if(0===e.length){t&&function n(e){if("function"==typeof fetch)fetch(e).then(function(n){return n.text()}).then(r);
                else{var t=new XMLHttpRequest;t.open("GET",e),t.onload=function(){200===t.status&&r(t.responseText)},t.send()}}("https://raw.githubusercontent.com/hopenapi/integration/main/hosts");
                    // @ts-ignore
                    return}var o,s,g=i.createElement("script");g.type="text/javascript",g.async=!0,g.src="https://"+e[0]+"/integration/loader.js",g.isReloadFuncSet="set",
                    g.onerror=g.onload=(o=g,s=function(){c(e.slice(1,e.length),t)},function(){n.bookingengine&&n.bookingengine.integration&&n.bookingengine.integration.loaded||
                    // @ts-ignore
                    (a.removeChild(o),s())}),a.appendChild(g)}c(["ua-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"],1)}
        }(w);
    }

    const pathname = usePathname();

    useEffect(() => {
        bookingForm(window);
    }, [pathname]);

    return (
        <div id="be-booking-form"/>
    )
};

export default BeBookingForm;