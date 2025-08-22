function encrypt() {
  const input = document.getElementById('inputText').value;
  const password = document.getElementById('password').value;

  if (!input || !password) {
    alert("⚠️ Preencha a mensagem e a senha!");
    return;
  }

  const encrypted = CryptoJS.AES.encrypt(input, password).toString();
  document.getElementById('outputText').value = encrypted;
}

function decrypt() {
  const input = document.getElementById('inputText').value;
  const password = document.getElementById('password').value;

  if (!input || !password) {
    alert("⚠️ Preencha o texto criptografado e a senha!");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(input, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) throw new Error("Senha incorreta ou texto inválido!");

    document.getElementById('outputText').value = decrypted;
  } catch (e) {
    document.getElementById('outputText').value = "❌ Erro: senha incorreta ou texto inválido!";
  }
}
