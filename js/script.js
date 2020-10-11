{
    const $rating = document.querySelector(`.form__rating`);
    const $balloonimage = document.querySelector(`.rating__img`);
    const $ratingtekst = document.querySelector(`.rating__tekst`);

    const init = () => {
        $rating.onchange = () => selectRating();
    }

    const selectRating = () => {
        let ratingValue;
        let ratingOptions = document.getElementsByName(`rating`);
        console.log(ratingOptions);

        for (let i = 0; i < ratingOptions.length; i++) {
            if (ratingOptions[i].checked) {
                ratingValue = ratingOptions[i].value;
                break;
            }
        }

        switch (ratingValue) {
            case 'one':
                $balloonimage.src = "assets/img/rating_one.png";
                $ratingtekst.textContent = `Sorry, we'll do better!`;
                $ratingtekst.style.fontWeight = 700;
                $ratingtekst.style.textTransform = 'uppercase';
                break;
            case 'two':
                $balloonimage.src = "assets/img/rating_two.png";
                $ratingtekst.textContent = `We'll take this in to consideration`;
                $ratingtekst.style.fontWeight = 700;
                $ratingtekst.style.textTransform = 'uppercase';
                break;
            case 'three':
                $balloonimage.src = "assets/img/rating_three.png";
                $ratingtekst.textContent = `Okay, thanks!`;
                $ratingtekst.style.fontWeight = 700;
                $ratingtekst.style.textTransform = 'uppercase';
                break;
            case 'four':
                $balloonimage.src = "assets/img/rating_four.png";
                $ratingtekst.textContent = `Thank you!`;
                $ratingtekst.style.fontWeight = 700;
                $ratingtekst.style.textTransform = 'uppercase';
                break;
            case 'five':
                $balloonimage.src = "assets/img/rating_five.png";
                $ratingtekst.textContent = `Wow great!`;
                $ratingtekst.style.fontWeight = 700;
                $ratingtekst.style.textTransform = 'uppercase';
                break;
        }
    }

    init();
}