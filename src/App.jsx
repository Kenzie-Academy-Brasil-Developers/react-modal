import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
   const [isOpen, setIsOpen] = useState(false);
   
   return (
      <div className="App">
         <button onClick={() => setIsOpen(true)}>Abrir modal</button>
         {isOpen ? <Modal setIsOpen={setIsOpen}>Teste</Modal> : null}
      </div>
   );
}

export default App;
