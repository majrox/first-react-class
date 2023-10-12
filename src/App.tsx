import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UserList } from './userList/UserList';
import { RenderProps } from './renderProps/RenderProps';
import { Hoc } from './hoc/Hoc';
import { HackerTyper } from './hackerTyper/HackerTyper'; 
import { Counter } from './counter/Counter';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <Link to="/hacker-typer">hacker typer</Link>
            </div>
            <div>
              <Link to="/ita-2">ITA 2</Link>
            </div>
            <div>
              <Link to="/counter">counter</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/key" element={<UserList />} />
          <Route path="/counter" element={<div style={{ background: "yellow" }}><Counter /></div>} />
          <Route path="/ita/:arg" element={<h1 style={{ background: "blue" }}>ita 2</h1>} />
          <Route path="/render-props" element={<RenderProps />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/hacker-typer" element={<HackerTyper />} />
          <Route index element={<div><h1>root</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}
