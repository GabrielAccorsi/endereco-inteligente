const form = document.getElementById("form-endereco")
const cep = document.getElementById("cep")
const logradouro = document.getElementById("logradouro")
const numero = document.getElementById("numero")
const uf = document.getElementById("uf")

cep.addEventListener("input", () => {
  let valor = cep.value.replace(/\D/g, "")
  if (valor.length > 5) valor = valor.replace(/(\d{5})(\d{1,3})/, "$1-$2")
  cep.value = valor
})

uf.addEventListener("input", () => {
  uf.value = uf.value.toUpperCase().replace(/[^A-Z]/g, "")
})

form.addEventListener("submit", e => {
  e.preventDefault()

  const regexCep = /^\d{5}-\d{3}$/
  const regexUf = /^[A-Z]{2}$/

  if (!regexCep.test(cep.value)) {
    alert("CEP inválido. Formato correto: 00000-000")
    return
  }

  if (logradouro.value.trim().length < 5) {
    alert("Logradouro deve conter pelo menos 5 caracteres")
    return
  }

  if (!/^\d+$/.test(numero.value)) {
    alert("Número deve conter apenas dígitos")
    return
  }

  if (!regexUf.test(uf.value)) {
    alert("UF inválido. Use duas letras maiúsculas (ex: SP)")
    return
  }

  alert("Endereço cadastrado com sucesso")
  form.reset()
})
