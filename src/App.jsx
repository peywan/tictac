function Square({value}) {
    function handleClick() {
        console.log('clicked!');
    }

    export default function Board() {
        return (
            <>
                return (
                <button
                    className="square"
                    onClick={handleClick}
                >
                    {value}
                </button>
                );
            </>
        );
    }
