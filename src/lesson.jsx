
function TestingLesson() {
    return <div>
                <h1>Test Title</h1>
                <svg>
                    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2"></circle>
                </svg>
                <form action="">
                    <input type="text" />
                </form>
            </div>
}
export default TestingLesson;

function TodoList() {
    return <div>
                <h1>Hedy Lamar's Todos</h1>
                <img src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
                    alt="Hedy Lamar"
                    className="photo">
                </img>
                <ul>
                    <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Imporve the spectrum technology</li>
                </ul>
            </div>
}
export {TodoList}