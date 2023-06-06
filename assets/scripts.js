$(document).ready(function () {
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

$('.contacter').click(function () {
    var medestinataires = {
       Nina: 'U2FsdGVkX19JRwt60LRIVKidsBDlYCZWymhP6WehzW3VnMBXsfo3mQANHSm4kus/fMXGHufADTsUa3/a7f0gCg=='
    };

    var sT = CryptoJS.AES.decrypt(medestinataires[$(this).attr('data-monemail')], $(this).attr('data-monemail')).toString(CryptoJS.enc.Utf8) + $(this).attr('data-sujet');


    $(this).attr('href', sT);
})
$('.contacter').focusout(function () {
    $(this).attr('href', '#');
})
