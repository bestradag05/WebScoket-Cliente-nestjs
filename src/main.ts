import './style.css'
import { setupCounter } from './counter.ts'
import { connectToServer } from './socket-client.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status">offline</span>
    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input id="message-input" type="text" placeholder="message" />
    </form>


    <h3>Messages</h3>
    <ul id="messages-ul">
      
    </ul>

  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

connectToServer();