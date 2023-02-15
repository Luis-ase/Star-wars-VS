import Styles from "../../styles/styles";
import Inputs from "../input/input";

function NavBar({findPersonaje}) {
    return (
        <div className={`${Styles.flexCenter} ${Styles.paddingX} my-5 `}>
            <Inputs findPersonaje={findPersonaje} lado={"Izq"}/>
            <h1 className="text-amber-400 text-center uppercase text-3xl sm:px-16 px-6">Star Wars Battle App</h1>
            <Inputs findPersonaje={findPersonaje} lado={"Der"}/>
        </div>
    );
}

export default NavBar;