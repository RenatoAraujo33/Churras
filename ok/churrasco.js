function calcularIngredientes() {
  const numPessoasInput = document.getElementById("numPessoas");
  const numPessoas = parseInt(numPessoasInput.value);

  const ingredientes = {};

  ingredientes["Carne"] = numPessoas * 0.3 + " kg";
  ingredientes["Linguiça"] = numPessoas * 0.2 + " kg";
  ingredientes["Pão de Alho"] = numPessoas * 1 + " unidade";
  ingredientes["Cerveja"] = numPessoas * 2 + " latas";
  ingredientes["Refrigerante"] = numPessoas * 1 + " garrafa";
  ingredientes["Carvão"] = "1 saco";

  const ingredientesList = document.getElementById("ingredientesList");
  ingredientesList.innerHTML = "";

  for (let ingrediente in ingredientes) {
    const li = document.createElement("li");
    li.textContent = `${ingrediente}: ${ingredientes[ingrediente]}`;
    ingredientesList.appendChild(li);
  }
}