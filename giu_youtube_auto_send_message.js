(() => {
  // Lista de emojis a serem enviados aleatoriamente
  const emojis = ['😊', '😂', '😍', '😎', '👍', '🔥', '🎉', '🤔', '🤖', '🐱‍👤', '🥳', '😜'];

  // Função para selecionar um número aleatório entre min e max (incluindo ambos)
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  // Função para selecionar 3 emojis aleatórios diferentes
  const getRandomEmojis = () => {
    let selectedEmojis = [];
    while (selectedEmojis.length < 3) {
      const emoji = emojis[rand(0, emojis.length - 1)];
      if (!selectedEmojis.includes(emoji)) {
        selectedEmojis.push(emoji);
      }
    }
    return selectedEmojis.join(' '); // Combina os emojis com um espaço entre eles
  };

  // Função para enviar a mensagem no chat
  const sendMessage = (emoji) => {
    console.log('Sending emojis:', emoji);
    
    // Seleciona o iframe do live chat
    const liveChatFrame = document.querySelector('iframe.style-scope.ytd-live-chat-frame');
    if (!liveChatFrame) {
      console.error('Live chat iframe not found');
      return;
    }

    // Acessa o conteúdo do iframe corretamente
    const chatInputBox = liveChatFrame.contentWindow.document.querySelector('#input.yt-live-chat-text-input-field-renderer');
    if (!chatInputBox) {
      console.error('Chat input box not found');
      return;
    }

    // Foca no campo de texto e insere o emoji
    chatInputBox.focus();
    chatInputBox.innerText = emoji;
    chatInputBox.dispatchEvent(new Event('input', { bubbles: true }));

    // Espera um pouco e tenta clicar no botão de envio
    setTimeout(() => {
      const sendButton = liveChatFrame.contentWindow.document.querySelector('#send-button button[aria-label="Send"]');
      if (!sendButton) {
        console.error('Send button not found');
        return;
      }
      
      console.log('Clicking send button');
      try {
        sendButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      } catch (error) {
        console.error('Error clicking send button:', error);
      }
    }, 1000);
  };

  // Função para escolher 3 emojis aleatórios e enviá-los a cada 10 a 15 minutos
  const autoSendEmoji = () => {
    const emojisToSend = getRandomEmojis(); // Escolhe 3 emojis aleatórios
    sendMessage(emojisToSend); // Envia os emojis

    const delay = rand(10, 15) * 60 * 1000; // Tempo de espera aleatório entre 10 e 15 minutos
    console.log(`Next emoji in ${delay / 1000 / 60} minutes`);
    
    setTimeout(autoSendEmoji, delay); // Define a próxima execução
  };

  // Inicia o processo de envio automático de emojis
  autoSendEmoji();
})();
