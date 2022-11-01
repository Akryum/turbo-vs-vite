import React from "react";

function Triangle({ style }) {
    return <polygon points="-5,4.33 0,-4.33 5,4.33" style={style} />;
}

export default React.memo(Triangle);
