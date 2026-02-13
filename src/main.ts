import './style.css'
import { setupCounter } from './counter.ts'
import { connectToServer } from './socket-client.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status">offline</span>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

connectToServer();