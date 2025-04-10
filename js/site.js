function validaFaleConosco(){
    var nome = document.frmCadastro.txtname.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente");
        document.frmCadastro.txtname.focus();
        return false;
    }
    
    var fone = document.frmCadastro.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    
    if(!expRegFone.test(fone)){
        alert("Preencha o campo Telefone corretamente");
        document.frmCadastro.txtfone.focus();
        return false;
    }
    if(document.frmCadastro.txtemail.value==""){
        alert("Preencha o campo E-mail. ");
        document.frmCadastro.txtemail.focus();
        return false;
    }
    if(document.frmCadastro.CheckMasc.value==""){
        alert("Informe seu sexo. ");
        document.frmCadastro.CheckMasc.focus();
        return false;
    }

    if (document.getElementById("desejo").checked){
        alert("Seleciona po");
        return false;
    } 
    
    if(document.frmCadastro.txtcomentario.value==""){
        alert("Preencha o motivo. ");
        document.frmCadastro.txtcomentario.focus();
        return false;
    }

    
    return true;
}

function verificaMotivo(motivo){
    var elemento = document.getElementById("opcaoProduto");

    
    if(motivo=="SI"){
        
        var select = document.createElement("select");
       
        select.setAttribute("name", "selMotivo");
        var option = document.createElement("option");
        option.setAttribute("value", "");
        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);
        select.appendChild(option);
        

        var option = document.createElement("option");
        option.setAttribute("value", "FR");
        var texto = document.createTextNode("Descontos");
        option.appendChild(texto);
        select.appendChild(option);

        elemento.appendChild(select);
    }
        
        else{
            if(elemento.firstChild)
                elemento.removeChild(elemento.firstChild);
            
            }

}


