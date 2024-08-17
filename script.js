const gameContainer = document.querySelector('.container'),
userResult = document.querySelector('.user_result img'),
cpuResult = document.querySelector('.cpu_result img'),
result = document.querySelector('.result'),
optionImages = document.querySelectorAll('.option_image');

optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        userResult.src = cpuResult.src = 'images/ฆ้อน.png'
        result.textContent = 'กำลังเป่ายิ้งฉุบ...'

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active')

        })
        gameContainer.classList.add('start')

        let time = setTimeout(() => {
            gameContainer.classList.remove('start')
            let imageScore = e.target.querySelector('img').src
            userResult.src = imageScore
            
            let randomNumber = Math.floor(Math.random() * 3)
            
            let cpuImages = ['images/ฆ้อน.png', 'images/กระดาษ.png', 'images/กรรไกร.png']
            cpuResult.src = cpuImages[randomNumber]
            
            let cpuValue = ['Hammer', 'Paper', 'Scissors'][randomNumber]
            let userValue = ['Hammer', 'Paper', 'Scissors'][index]

            let outcomes = {
                HammerHammer: 'เสมอ',
                HammerPaper: 'บอท',
                HammerScissors: 'คุณ',
                PaperPaper: 'เสมอ',
                PaperHammer: 'คุณ',
                PaperScissors: 'บอท',
                ScissorsScissors: 'เสมอ',
                ScissorsHammer: 'บอท',
                ScissorsPaper: 'คุณ'
            }
            
            let outComeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? 'เสมอ' : `${outComeValue} ชนะ!!`;
        },2500);
        
        console.log(outComeValue);
        
        })
    })
