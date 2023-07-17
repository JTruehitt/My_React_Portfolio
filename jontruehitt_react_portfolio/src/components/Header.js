import Nav from './Nav';

export default function Header({currentPage, handlePageChange}) {
    return (
        <header className='text-center mt-3'>
        <h1>Jon Truehitt</h1>
        <h2>Full Stack Developer</h2>
        <div className="d-flex justify-content-center">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
        </header>
    );
    }