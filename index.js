/**
 * brinput.js
 * @version: v1.0.3
 * @author: Lucas Caires
 *
 * Plugin utilizado em projetos pessoais para adicionar máscaras em campos de formulário
 */

class brInput {

  //Constructor
  constructor(args) {
    this.config = {}
    this.config.sel = args && args.sel || "[br-input]"
    this.config.attr = args && args.attr || "br-input"
    this.init()
  }

  //Init
  init() {
    if("object" === typeof this.getElements()) {
      this.getElements().forEach(each => this.setListener(each))
    }
  }

  //Get Nodes
  getElements() {
    return this.config.sel && document.querySelectorAll(this.config.sel)
  }

  //Listen to the keyboard and fire the relative method
  setListener(each) {
    const input = each.getAttribute(this.config.attr)
    each.addEventListener('keyup', key => {
      if ("telefone" === input) this.telefoneMask(each)
      if ("cep" === input) this.cepMask(each)
      if ("cpf" === input) this.cpfMask(each)
      if ("cnpj" === input) this.cnpjMask(each)
    })
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

export default brInput