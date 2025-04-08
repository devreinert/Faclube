function validaFaleConosco(){
    if(document.frmCadastro.txtname.value==""){
        alert("Preencha o campo Nome. ");
        document.frmCadastro.txtname.focus();
        return false;
    }
    if(document.frmCadastro.txtfone.value==""){
        alert("Preencha o campo Telefone. ");
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
    if(document.frmCadastro.selMotivo.value==""){
        alert("Preencha o motivo. ");
        document.frmCadastro.selMotivo.focus();
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


