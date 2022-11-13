import { Confetti, EnvelopeSimple, HouseSimple, SketchLogo } from "phosphor-react";
import "./styles.scss";

export function Header() {
    return (
        <header>
            <div>
                <SketchLogo size={50} color="#121212" weight="duotone" />
                <nav>
                    <ul>
                        <li>
                            <HouseSimple size={25} color="#fff" weight="duotone" />
                            HOME
                        </li>
                        <li>
                            <Confetti size={25} color="#fff" weight="duotone" />
                            PROJECTS
                        </li>
                        <li>
                            <EnvelopeSimple  size={25} color="#fff" weight="duotone" />
                            CONTACT
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}