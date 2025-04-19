import ReduxProvider from "@/providers/ReduxProvider";
import ReduxCounter from "@/components/ReduxCounter";

export default function Coba() {
    return (
        <ReduxProvider>
            <ReduxCounter />
        </ReduxProvider>
    );
}