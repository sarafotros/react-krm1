import React, { useState} from 'react'

export default function MytimeFunc() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
   }, 1000);

    return (
        <div
            style={{
                width: 150,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span>{time}</span>
        </div>
	);
}
