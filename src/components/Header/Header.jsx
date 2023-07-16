const Header = (props) => {
    function handleSubmit(event) {//call back
        event.preventDefault();
        const searchValue = event.target[0].value;
        props.onSubmit(searchValue);

        event.target[0].value = "";
    }
    return (
        <header className="Header">
            <h1>Fimes Buscador</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pesquisar Filme" />
            </form>
        </header>
    );
};

export default Header;