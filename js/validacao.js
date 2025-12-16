document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("javascript");

  form.addEventListener("submit", function(event) {
    const telefone = document.getElementById("id_telefone").value.trim();
    const cpf = document.getElementById("id_cpf").value.trim();

    const telefoneRegex = /^\(?\d{2}\)?\s?(\d{4,5})[-.\s]?(\d{4})$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!telefoneRegex.test(telefone)) {
      alert("Por favor, insira um telefone válido (ex: (00) 0000-00000 ).");
      event.preventDefault();
      return;
    }

    if (!cpfRegex.test(cpf)) {
      alert("Por favor, insira o CPF no formato 999.999.999-99.");
      event.preventDefault();
      return;
    }

    alert("Mensagem enviada com sucesso!");
  });
});
