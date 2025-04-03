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
    if(document.comentario.txtcomentario.value=""){
        alert("Preencha o motivo. ");
        document.comentario.txtcadastro.focus();
        return false;
    }
    return true;
}

