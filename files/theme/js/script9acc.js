jQuery(function($){

    $(document).ready(function() {
        // --------------------------------------------
        // --
        // -- SCROLLING CLASS
        // --
        // --------------------------------------------
        $(window).scroll(function()
        {
            docOffset = window.pageYOffset;
            if (docOffset > 20)
            {
                $('body').addClass('scrolling');
            }
            else
            {
                $('body').removeClass('scrolling');
            }
        });

        docOffset = window.pageYOffset;
        if (docOffset > 1)
        {
            $('body').addClass('scrolling');
        }

        // --------------------------------------------
        // --
        // -- SCROLL TO ANCHOR
        // --
        // --------------------------------------------
        header_height = 220;  // nicht per JS holen, da die Höhe erst nach dem Scrollen feststeht
        url_hash = window.top.location.hash;
        if (url_hash)
        {
            scrollToTop = $(url_hash).offset().top - header_height;
            $('html, body').animate({
                scrollTop: scrollToTop
            }, 500);
        }

        $('a').on('click', function (e)
        {
            if ($(this).attr('href').indexOf('#') >= 0)
            {
                // Is anchor on same page?
                hash = $(this).attr('href').substring($(this).attr('href').indexOf('#'));
                if ($('body').find(hash).length > 0)
                {
                    e.preventDefault();

                    // Close menu if open
                    if ($('body').hasClass('menu-active')) {
                        $('body').removeClass('menu-active');
                        $('#mainnav-menu').slideUp();
                    }

                    // Scroll to anchor
                    //scrollToTop = $(hash).offset().top - parseInt($(hash).css('padding-top').replace('px','')) - $('#header').height();
                    scrollToTop = $(hash).offset().top - header_height;
                    $('html,body').animate({scrollTop: scrollToTop},300);

                    // open accordion
                    if ($(hash).hasClass('ce_accordion')) {
                        $(hash + '.ce_accordion').find('.toggler').trigger('click');
                    }
                }
            }
        });

        // open accordion
        if ($(url_hash).hasClass('ce_accordion')) {
            $(url_hash + '.ce_accordion').find('.toggler').trigger('click');
        }

        // --------------------------------------------
        // --
        // -- TO TOP
        // --
        // --------------------------------------------
        $('#topLink a').on('click', function (e)
        {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        });

    });

});