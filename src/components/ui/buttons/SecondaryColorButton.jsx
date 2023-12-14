import "../../../styles/SecondaryColorButton.css";

export default function SecondaryColorButton({ children, onClick }) {
    return (
        <button className="secondary-color__button" onClick={onClick}>
            {children}
        </button>
    );
}