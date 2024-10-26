import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <>
            <h4 className="text-5xl">Error 404: Page not Found</h4>

            <Link to="/" className="text-blue-600 underline">Home</Link>
        </>
    )
}