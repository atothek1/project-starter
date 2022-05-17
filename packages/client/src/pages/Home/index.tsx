import { usePing } from "@services/usePing";

export function Home() {
    const { data } = usePing();
    const serverInfoElement =  (data !== null ) && ( <p>{ "Server time: " + data.time }</p> );
    return (
        <>
            <h1>Hello World,</h1>
            <p>have fun & a great day!</p>
            { serverInfoElement }
        </>
    );
}