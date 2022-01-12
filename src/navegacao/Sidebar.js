// Estilização
import '../App.css'

// TODO: Usar tog como paramentro para on/off
// OU Alterado por uma variável em '../App.js'
// OU Alterado por evento em './Header.js'
export default function Sidebar(isToggled) {
    if (isToggled === true) {
        return (
            <p> Tog ON!</p>
        )
    } else {
        return (
            <p> Tog OFF (ou quebrado) </p>
        )
    }
};