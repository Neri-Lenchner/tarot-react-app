import React from 'react';
import './App.css';
import Header from "./components/layout/header/Header";
import SideBar from "./components/layout/side-bar/SideBar";
import Main from "./components/layout/main/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section>
          <aside className="side-bar">
              <SideBar />
          </aside>
          <main>
              <Main />
          </main>
      </section>
    </div>
  );
}

export default App;
