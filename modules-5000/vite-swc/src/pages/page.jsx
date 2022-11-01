import React from "react";
import Triangle from "../triangle.jsx";

export default function Page() {
    React.useEffect(() => {
        globalThis.__turbopackBenchBinding && globalThis.__turbopackBenchBinding("Hydration done");
    })
    return <svg height="100%" viewBox="-5 -4.33 10 8.66" style={{ backgroundColor: "black" }}>
        <Triangle style={{ fill: "white" }}/>
    </svg>
}
