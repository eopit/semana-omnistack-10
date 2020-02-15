import React, { useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(position.coords);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type='submit'>Cadastrar</button>

        </form>
      </aside>
      <main>
        <ul> 
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/47369865?s=460&v=4" alt="Pedro Henrique"></img>
              <div className="user-info">
                <strong>Pedro Henrique</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>just practing. ;)</p>
            <a href="https://github.com/eopit">Acessar perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/47369865?s=460&v=4" alt="Pedro Henrique"></img>
              <div className="user-info">
                <strong>Pedro Henrique</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>just practing. ;)</p>
            <a href="https://github.com/eopit">Acessar perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/47369865?s=460&v=4" alt="Pedro Henrique"></img>
              <div className="user-info">
                <strong>Pedro Henrique</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>just practing. ;)</p>
            <a href="https://github.com/eopit">Acessar perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/47369865?s=460&v=4" alt="Pedro Henrique"></img>
              <div className="user-info">
                <strong>Pedro Henrique</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>just practing. ;)</p>
            <a href="https://github.com/eopit">Acessar perfil Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
