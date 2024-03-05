import Sidebar from './Sidebar'
import MovieList from './cine/MovieList'

export default function Main() {
    return (
        <>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main>
        </>
    )
}