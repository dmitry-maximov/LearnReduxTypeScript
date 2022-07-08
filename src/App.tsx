import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <div style={{ padding: 10 }}>
        <h1>Список пользователей</h1>
        <UserList />
      </div>
      <div style={{ padding: 10 }}>
        <h1>Список пользователей</h1>
        <TodoList />
      </div>
    </>
  );
}

export default App;
