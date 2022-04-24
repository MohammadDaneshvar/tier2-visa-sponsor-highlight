$(function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    // Observe body change, because linkedin is using Ajax
    var mainObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            $(mutation.addedNodes).each(function () {
                if (this.nodeType === 1) { // Is element node
                    if ($(this).is('.job-card-container__company-name:not(.tier-2-checked)')) {
                        tier2Util.companyCheck($(this));
                    }
                }
            });

            if ($(mutation.target).is('.jobs-unified-top-card__company-name a')) {
                tier2Util.companyCheck($('.jobs-unified-top-card__company-name a'));
            }
        });
    });

    var body = $('body').get(0);
    if (body) {
        mainObserver.observe(body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    }

    $('.jobs-details-top-card__company-url:not(.tier-2-checked)').each(function () {
        tier2Util.companyCheck($(this));
    });

    $('.job-card__company-name:not(.tier-2-checked)').each(function () {
        tier2Util.companyCheck($(this));
    });

});