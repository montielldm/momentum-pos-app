import { Link } from "react-router-dom"



export default function TabListSettings() {
    return (
        <div className="border-y border-dashed mt-2 py-2 px-3 flex items-center gap-2">
            <Link to="/app/settings">
                General
            </Link>
            <Link to="/app/settings/headquarters">
                Headquarters
            </Link>
            <Link to="/app/settings/tables">
                Tables
            </Link>
        </div>
    )
}
