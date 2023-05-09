// import logo from './logo.svg';
import './App.css';

function App() {

  const [Users, setUsers] = useState([])

  (async()=>{
    const url = await fetch("https://sunglasses-dugong.cyclic.app/")
    const data = await url.json()
    setUsers(data)
    console.log(data)
  })()

  return (
    <div className="App">
      <table className={`table table-striped table-${Mode} table-hover`}>
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Reg. Date</th>
          </tr>
        </thead>
        <tbody>
          {Users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;
