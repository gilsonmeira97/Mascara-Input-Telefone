/*Ex do input: <input type="tel" name="telefone" onblur="limpa_mascara(this)" onfocus="mascara(this)" OnKeyPress="formatar(this)" 
placeholder="Ex: (21)9999-9999">
*/


function limpa_mascara(documento){
	if(documento.value.length>0 && documento.value.length<13){
	documento.value = '';	
	//Se a quantidade de caracteres no input for maior que 0 e menor que 13, limpa o campo de telefone se for retirado o foco do input. (Utilize o atributo "OnBlur" no input para chamar esta função)
			}
}

function mascara(documento){	
	if(documento.value.length==0){
	documento.value = '(';	//Adiciona o parenteses esquerdo ao focalizar o input (Utilize o atributo "OnFocus" no input para chamar esta função)
			}			

}

function formatar(documento){
	var mascara = '###)####-####';
	var i = documento.value.length; 
	var saida = '#';
	var texto = mascara.substring(i);		  		 

	if (texto.substring(0,1) != saida){
	documento.value += texto.substring(0,1);
		  	}
	//Insere a mascara no input através do formato informado na variavel "mascara" (Utulize o atributo "OnKeyPress" no input e passe o parametro "this" para esta função")
		  
}
