import { useState } from "react";

function App() {

  const msgPaste = "Insira seu texto aqui!";
  const msgCopy = "E ele aparecerá invertido aqui!";

  // Cria as variáveis com estado
  const [text, setText] = useState(msgPaste);
  const [textInvertido, setTextInvertido] = useState(msgCopy);
  const [inputFirstFocus, setInputFirstFocus] = useState(false);

  // Função para inverter o texto
  function inverterTexto(texto) {
    return texto.split("").reverse().join("");
  }

  return (

    <div className="w-screen h-screen flex flex-col bg-slate-700 justify-center items-center gap-3">

      <h1 className="text-3xl text-slate-50 font-semibold">Invertexto</h1>

      <p className="text-slate-50">Digite seu texto para vê-lo invertido!</p>

      <div className="flex gap-5">

        <textarea
          className="bg-slate-50 w-[280px] h-40 rounded-md outline-0 p-3"
          type="text"   
          value={text}

          // Adicionar texto padrão caso input esteja vazio
          onBlur={
            function() {
              if (!text.trim()) {
                setText(msgPaste)
                setTextInvertido(msgCopy)
                setInputFirstFocus(false);
              }
            }
          }

          // Limpar o texto padrão ao focar o input
          onFocus={
            function() {
              if (!inputFirstFocus) {
                setText("");
                setTextInvertido("");
                setInputFirstFocus(true);
              }
            }
          }

          // Alterar em tempo real os textos
          onChange={
            function(event) {
              // Atualiza o texto
              const newText = event.target.value;
              // Altera o estado do texto 
              setText(newText);
              // Altera o estado do texto invertido
              setTextInvertido(inverterTexto(newText));
            }
          }
        />

        <textarea
          className="bg-slate-50 w-[280px] h-40 rounded-md outline-0 p-3"
          type="text" 
          value={textInvertido}
        />

      </div>

    </div>

  )

}

export default App;