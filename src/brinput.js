/**
 * brinput.js
 * @version: v1.0.0
 * @author: Lucas Caires
 *
 * Plugin utilizado em projetos pessoais para adicionar máscaras em campos de formulário
 */


	var _br,
    brInput = {

	//Seletor	
	sel: document.querySelectorAll("[br-input]"),

	//Inicia
	init: function init() {
		_br = this;
		_br.bind();
	},

	bind: function bind() {
		_br.sel.forEach(_br.setListener);
	},

	//Bind do teclado
	setListener: function setListener(each) {
		var input = each.getAttribute("br-input");
		each.addEventListener('keyup', function (key) {
			_br.setMask(input, this);
		});
	},

	//Seta os métodos para seus respectivos atributos
	setMask: function setMask(input, key) {
		if ("telefone" === input) _br.telefoneMask(key);
		if ("cep" === input) _br.cepMask(key);
		if ("cpf" === input) _br.cpfMask(key);
		if ("cnpj" === input) _br.cnpjMask(key);
	},

	//Adiciona o atributo max-length
	setMaxlen: function setMaxlen(el, size) {
		el.setAttribute('maxlength', size);
	},

	//Mascara para Telefone (00) 0000-0000
	telefoneMask: function telefoneMask(k) {
		_br.setMaxlen(k, 15);
		var a = k.value;
		a = a.replace(/\D/g, "");
		a = a.replace(/^(\d{2})(\d)/g, "($1) $2");
		if (a.length > 12) a = a.replace(/(\d)(\d{4})$/, "$1-$2");
		k.value = a;
	},

	//Mascara para CEP 000000-000
	cepMask: function cepMask(k) {
		_br.setMaxlen(k, 9);
		var a = k.value;
		a = a.replace(/\D/g, "");
		a = a.replace(/^(\d{5})(\d)/g, "$1-$2");
		k.value = a;
	},

	//Mascara para CPF 000.000.000-00
	cpfMask: function cpfMask(k) {
		_br.setMaxlen(k, 14);
		var a = k.value;
		a = a.replace(/\D/g, "");
		a = a.replace(/(\d{3})(\d)/, "$1.$2");
		a = a.replace(/(\d{3})(\d)/, "$1.$2");
		a = a.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		k.value = a;
	},

	//Mascara para CNPJ 00.000.000/0000-00
	cnpjMask: function cnpjMask(k) {
		_br.setMaxlen(k, 18);
		var a = k.value;
		a = a.replace(/\D/g, "");
		a = a.replace(/(\d{2})(\d)/, "$1.$2");
		a = a.replace(/(\d{3})(\d)/, "$1.$2");
		a = a.replace(/(\d{3})(\d)/, "$1/$2");
		a = a.replace(/(\d{4})(\d)/, "$1-$2");
		k.value = a;
	}
};
brInput.init()
