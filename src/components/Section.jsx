import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";

export default function Section({ isFancy, children }) {
    const level = useContext(LevelContext);

    return (
        <section className={"section " + (isFancy ? 'fancy' : '')}>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}
