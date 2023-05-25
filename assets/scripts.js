$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

$('.jeveuxecrire').click(function() { //Protection mails et decodage au click
            
    //<a class="jeveuxecrire" data-courriel="John" data-objet="Lucy in the Sky with Diamonds" href="#">Toto</a>
        
        var medestinataires= {
            Paul :     'U2FsdGVkX19H4uulqUsl7aYZ52uzi7a5ZYMvoG4AS9bVbydoH3pLeeiVVOAKBOGc6KWXuTN8M/mzghY3DXV+OQ==',
            John :     'U2FsdGVkX1+equgvbyf/8950tgSj2nluLf865mZ84cGBsswcFOT9CySy069QPlQq'
        };
        
        var sT = CryptoJS.AES.decrypt(medestinataires[$(this).attr('data-akikoncause')],$(this).attr('data-akikoncause')).toString(CryptoJS.enc.Utf8) + $(this).attr('data-dekoikoncause');

        // Ajouter ou modifier l'attribut « href » avec l'adresse
        $(this).attr('href', sT);

    
})
$('.jeveuxecrire').focusout(function() {
    $(this).attr('href', '#');
})
