const walletBlockItem = document.getElementById('walletBlock');
const connectWalletItem = document.getElementsByClassName('connectWallet');
const wrapperItem = document.getElementById('wrapper');
const walletBlockCrossIcon = document.getElementById('walletBlockCrossIcon');

function walletBlockVision(){
    walletBlockItem.classList.add('walletBlockActive');
    wrapperItem.classList.add('wrapperWalletBlockOpen');
    document.body.style.overflow = 'hidden';
}

walletBlockCrossIcon.addEventListener('click', () => {
    walletBlockItem.classList.remove('walletBlockActive');
    wrapperItem.classList.remove('wrapperWalletBlockOpen');
    document.body.style.overflow = 'auto';
});

