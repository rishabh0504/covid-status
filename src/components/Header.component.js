function Header() {
    const changeDirection = () => {
        const body = document.getElementById('body');
        if (body.style.direction === '' || body.style.direction === 'ltr') {
            body.style.direction = 'rtl';
        } else {
            body.style.direction = 'ltr';
        }
    }
    return (
        <div className="col-12">
            <div className='header'>
                <div className="col-6 theme-color d-flex title">
                    Covid status
                </div>
                <div className="col-6 d-flex change-direction">
                    <button type='button' className='btn btn-sm btn-warning' onClick={(e) => changeDirection()}>Change Direction</button>
                </div>
            </div>
        </div>

    )
}
export default Header;