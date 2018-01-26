/**
 * brinput.js
 * @version: v1.0.3
 * @author: Lucas Caires
 *
 * Plugin utilizado em projetos pessoais para adicionar máscaras em campos de formulário
 */

export default class brInput {

  //Constructor
  constructor(args) {

    this.default = {
      telefone: '[br-input=telefone]',
      cpf: '[br-input=cpf]',
      cnpj: '[br-input=cnpj]',
      cep: '[br-input=cep]'
    }
    this.config = args || {}
    this.config.inputs = args && args.inputs || this.default
    this.init()
  }

  //Init
  init() {
    let inputs = this.config.inputs
    Object.keys(inputs).forEach(key => {
      let nodes = document.querySelectorAll(inputs[key])
      if(nodes.length > 1) {
        nodes.forEach(node => this.listen(key, node))
      } else {
        this.listen(key, nodes[0])
      }
    }) 
  }

  //Listen keyup
  listen(key, node) {
    node.addEventListener('keyup', () => {
      this.mask(key, node)
    })
  }

  //Set mask
  mask(key, node) {
    if ("telefone" === key) this.telefoneMask(node)
      if ("cep" === key) this.cepMask(node)
      if ("cpf" === key) this.cpfMask(node)
      if ("cnpj" === key) this.cnpjMask(node)
  }
  
  //Set the max length of the input
  setMaxlen(el, size) {
    el.setAttribute('maxlength', size)
  }

  //Set mask for brazilian phone: (00) 0000-0000
  telefoneMask(k) {
    this.setMaxlen(k, 15)
    let a = k.value
    a = a.replace(/\D/g, "")
    a = a.replace(/^(\d{2})(\d)/g, "($1) $2")
    if (a.length > 12) a = a.replace(/(\d)(\d{4})$/, "$1-$2")
    k.value = a
  }

  //Mask for brazilian zip-code (CEP): 000000-000
  cepMask(k) {
    this.setMaxlen(k, 9)
    let a = k.value
    a = a.replace(/\D/g, "")
    a = a.replace(/^(\d{5})(\d)/g, "$1-$2")
    k.value = a
  }

  //Mask for brazilian social security number: 000.000.000-00
  cpfMask(k) {
    this.setMaxlen(k, 14)
    let a = k.value
    a = a.replace(/\D/g, "")
    a = a.replace(/(\d{3})(\d)/, "$1.$2")
    a = a.replace(/(\d{3})(\d)/, "$1.$2")
    a = a.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    k.value = a
  }

  //Mask for brazilian national registry of companies: 00.000.000/0000-00
  cnpjMask(k) {
    this.setMaxlen(k, 18)
    let a = k.value
    a = a.replace(/\D/g, "")
    a = a.replace(/(\d{2})(\d)/, "$1.$2")
    a = a.replace(/(\d{3})(\d)/, "$1.$2")
    a = a.replace(/(\d{3})(\d)/, "$1/$2")
    a = a.replace(/(\d{4})(\d)/, "$1-$2")
    k.value = a
  }
}