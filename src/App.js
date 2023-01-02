import "./App.css";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div>
            <nav className="navbar">
                <h1>Todos</h1>
            </nav>
            <section>
                <TodoList />
            </section>
        </div>
    );
}

export default App;
