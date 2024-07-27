import { useEffect, useState } from "react";




type countProps = {
    iconComponent: any
    initialValue: any
    targetValue: any
    text: any
}
const CountUpAnimation = (props: countProps) => {
    const { iconComponent,
        initialValue,
        targetValue,
        text } = props
    const [count, setCount] = useState(initialValue);
    const duration = 4000; // 4 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className="flex h-full w-1/4 flex-col items-center justify-center ">
            <div className="icon">{iconComponent}</div>
            <span className="num sm:text-4xl text-secondary-100 font-bold">{count}</span>
            <span className="text-white font-bold text-center sm:text-3xl text-[14px] ">{text}</span>
        </div>
    );
};
const Stats = () => {

    return (
        <div className="w-full my-0 ">
            <div className="w-full sm:h-[30vh] h-[14vh]  bg-black  flex-col flex items-center justify-center ">
                <div className="flex w-full sm:px-24 ">
                    <CountUpAnimation
                        iconComponent=""
                        initialValue={0}
                        targetValue={2250}
                        text="Happy clients"
                    />
                    <CountUpAnimation
                        iconComponent=""
                        initialValue={0}
                        targetValue={1250}
                        text="Awards"
                    />
                    <CountUpAnimation
                        iconComponent=""
                        initialValue={0}
                        targetValue={250}
                        text="Awards"
                    />
                    <CountUpAnimation
                        iconComponent=""
                        initialValue={0}
                        targetValue={250}
                        text="Awards"
                    />
                </div>
            </div>

        </div>
    )
}

export default Stats