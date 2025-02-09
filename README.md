# 🤖 YouTube Auto Chat Bot

<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Bandeira do Brasil" width="20"/> O arquivo .js contém um script JavaScript que automatiza o envio de emojis no chat de uma live do YouTube. O código foi projetado para ser executado no console do DevTools.<br>
<img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Bandeira dos EUA" width="20"/> The .js file contains a JavaScript script that automates sending emojis in the chat of a YouTube Live stream. The code is designed to run in the DevTools console.

---

## 📖 Índice / Index
- <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Bandeira do Brasil" width="20"/> [Português (BR)](#português-br)
- <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Bandeira dos EUA" width="20"/> [English (EN)](#english-en)
- [Aviso / Disclaimer](#-disclaimer--aviso)

---

## <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Bandeira do Brasil" width="20"/> Português (BR)

### Como usar
| Passo | Descrição |
|-------|-----------|
| 1 | **Abra o YouTube Live**: Acesse a live do YouTube onde você deseja enviar os emojis. |
| 2 | **Abra o DevTools**: No seu navegador, pressione `F12` ou `Ctrl + Shift + I` (Windows/Linux) ou `Cmd + Option + I` (Mac). |
| 3 | **Vá para a aba Console**: No DevTools, selecione a aba "Console". |
| 4 | **Use o `allow pasting`**: Se necessário, digite `allow pasting` no console para permitir a colagem do código. |
| 5 | **Cole o código**: Copie o código JavaScript fornecido e cole-o no console. |
| 6 | **Pressione Enter**: Após colar o código, pressione `Enter` para executá-lo. |
| 7 | **Observe o funcionamento**: O script começará a enviar emojis no chat da live a cada 10 a 15 minutos. Mensagens como `Sending emojis: 😊 😎 🎉` e `Next emoji in X minutes` serão exibidas no console. |

### É seguro usar?
| Pergunta | Resposta |
|----------|----------|
| O YouTube pode detectar o uso do script? | O YouTube não consegue distinguir entre ações feitas manualmente por um usuário e ações feitas por um script executado no DevTools. |
| Há riscos de bloqueio? | Se você enviar muitas mensagens em um curto período de tempo, o YouTube pode detectar atividade suspeita e limitar ou bloquear sua conta temporariamente. |

### Personalização
| Opção | Descrição |
|-------|-----------|
| **Alterar a lista de emojis** | Modifique a lista `emojis` para incluir os emojis que você preferir. |
| **Mudar o intervalo de tempo** | Altere os valores `10` e `15` na função `rand` para definir um intervalo diferente (em minutos). |
| **Enviar texto em vez de emojis** | Substitua a lista de emojis por uma lista de mensagens de texto. |

---

## <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Bandeira dos EUA" width="20"/> English (EN)

### How to use
| Step | Description |
|------|-------------|
| 1 | **Open YouTube Live**: Go to the YouTube live stream where you want to send emojis. |
| 2 | **Open DevTools**: In your browser, press `F12` or `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac). |
| 3 | **Go to the Console tab**: In DevTools, select the "Console" tab. |
| 4 | **Use `allow pasting`**: If necessary, type `allow pasting` in the console to allow pasting the code. |
| 5 | **Paste the code**: Copy the provided JavaScript code and paste it into the console. |
| 6 | **Press Enter**: After pasting the code, press `Enter` to execute it. |
| 7 | **Observe the operation**: The script will start sending emojis in the live chat every 10 to 15 minutes. Messages like `Sending emojis: 😊 😎 🎉` and `Next emoji in X minutes` will appear in the console. |

### Is it safe to use?
| Question | Answer |
|----------|--------|
| Can YouTube detect the use of the script? | YouTube cannot distinguish between actions performed manually by a user and actions performed by a script executed in DevTools. |
| Are there risks of being blocked? | If you send too many messages in a short period of time, YouTube may detect suspicious activity and temporarily limit or block your account. |

### Customization
| Option | Description |
|--------|-------------|
| **Change the emoji list** | Modify the `emojis` list to include your preferred emojis. |
| **Change the time interval** | Adjust the values `10` and `15` in the `rand` function to set a different interval (in minutes). |
| **Send text instead of emojis** | Replace the emoji list with a list of text messages. |

---

## ⚠️ Disclaimer / Aviso

<table>
  <tr>
    <th>Idioma</th>
    <th>Mensagem</th>
  </tr>
  <tr>
    <td width="150"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Bandeira do Brasil" width="20"/> Português</td>
    <td>Este script é apenas para fins educacionais. Use-o por sua conta e risco. O autor não se responsabiliza por qualquer bloqueio ou restrição imposta pelo YouTube.</td>
  </tr>
  <tr>
    <td width="150"><img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Bandeira dos EUA" width="20"/> English</td>
    <td>This script is for educational purposes only. Use it at your own risk. The author is not responsible for any blocks or restrictions imposed by YouTube.</td>
  </tr>
</table>
