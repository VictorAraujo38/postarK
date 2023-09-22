function getCurriculo(){
    const curriculo = 'https://github.com/VictorAraujo38/Curriculo/blob/main/Curriculo_Victor_Hugo_Araujo.pdf';
    window.open(curriculo, '_blank');
}

function contatarViaEmail(){
    const email = 'victorharaujo38@hotmail.com';

    const linkEmail = `mailto:${email}`;

    window.location.href = linkEmail;
}