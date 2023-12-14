import { DensityMedium } from "@mui/icons-material";
import "../../styles/Header.css";
import NavigationButton from "../ui/buttons/NavigationButton";
import { useState } from "react";
// import DensityMediumTwoToneIcon from '@mui/icons-material/DensityMediumTwoTone';

export default function Header() {
    const [isClickedNavButton, setIsClickedNavButton] = useState(false);

    const onClickNavButtonHandler = (e) => {
        setIsClickedNavButton(!isClickedNavButton);
    }

    return (
        <header>
            <img src="../../assets/svg/at-digital-logo.svg" alt="company logo" />
            <div className="header-navigation">
                <NavigationButton
                    clicked={isClickedNavButton}
                    onClick={onClickNavButtonHandler}
                    className="header-navigation__button"
                />

                {
                    <nav className={isClickedNavButton ? "header-navigation__list" : "header-navigation__list display-none"}>
                        <ul>
                            <li>SERVICES</li>
                            <li>ABOUT US</li>
                            <li>CONTACT US</li>
                            <li>CAREERS</li>
                        </ul>
                    </nav>
                }
            </div>
        </header>
    );
}