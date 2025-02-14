const container = document.querySelector('.container');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeIMG = document.querySelector('#qr-code img');

function generateQrCode(){
    const qrCodeInputValues = qrCodeInput.value;
    if(!qrCodeInputValues) return;

    qrCodeBtn.innerText = 'Gerando Código...';
    qrCodeIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValues}`;
    qrCodeIMG.addEventListener('load', ()=>{
        container.classList.add('active');
        qrCodeBtn.innerText = 'Código Gerado!';
    });
};

qrCodeBtn.addEventListener('click', ()=>{
    generateQrCode();
});

qrCodeInput.addEventListener('keydown', (e)=>{
    if(e.code == 'Enter'){
        generateQrCode();
    };
});

qrCodeInput.addEventListener('keyup', ()=>{
    if(!qrCodeInput.value){
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar QR CODE';
    };
});
