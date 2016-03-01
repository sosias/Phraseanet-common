// @TODO enable lints
/* eslint-disable max-len*/
/* eslint-disable object-shorthand*/
/* eslint-disable dot-notation*/
/* eslint-disable vars-on-top*/
/* eslint-disable prefer-template*/
/* eslint-disable prefer-const*/
/* eslint-disable spaced-comment*/
/* eslint-disable curly*/
/* eslint-disable object-curly-spacing*/
/* eslint-disable spaced-comment*/
/* eslint-disable prefer-arrow-callback*/
/* eslint-disable one-var*/
/* eslint-disable space-in-parens*/
/* eslint-disable camelcase*/
/* eslint-disable no-undef*/
/* eslint-disable quote-props*/
/* eslint-disable no-shadow*/
/* eslint-disable no-param-reassign*/
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-shadow*/
/* eslint-disable no-implied-eval*/
/* eslint-disable brace-style*/
/* eslint-disable no-unused-vars*/
/* eslint-disable brace-style*/
/* eslint-disable no-lonely-if*/
/* eslint-disable no-inline-comments*/
/* eslint-disable default-case*/
/* eslint-disable one-var*/
/* eslint-disable semi*/
/* eslint-disable no-throw-literal*/
/* eslint-disable no-sequences*/
/* eslint-disable consistent-this*/
/* eslint-disable no-dupe-keys*/
/* eslint-disable semi*/
/* eslint-disable no-loop-func*/

import * as jQuery from 'jquery';

let p4 = p4 || {};

let commonModule = (function ($, p4) {
    $(document).ready(function () {
        $('input.input-button').hover(
            function () {
                $(this).addClass('hover');
            },
            function () {
                $(this).removeClass('hover');
            }
        );

        let locale = $.cookie('locale');

        let jq_date = p4.lng = typeof locale !== 'undefined' ? locale.split('_').reverse().pop() : 'en';

        if (jq_date === 'en') {
            jq_date = 'en-GB';
        }

        $.datepicker.setDefaults({showMonthAfterYear: false});
        $.datepicker.setDefaults($.datepicker.regional[jq_date]);

        $('body').on('click', '.infoDialog', function (event) {
            _infoDialog($(this));
        });

        let cache = $('#mainMenu .helpcontextmenu');
        $('.context-menu-item', cache).hover(function () {
            $(this).addClass('context-menu-item-hover');
        }, function () {
            $(this).removeClass('context-menu-item-hover');
        });

        $('#help-trigger').contextMenu('#mainMenu .helpcontextmenu', {
            openEvt: 'click', dropDown: true, theme: 'vista', dropDown: true,
            showTransition: 'slideDown',
            hideTransition: 'hide',
            shadow: false
        });
    });
    function _infoDialog(el) {
        $('#DIALOG').attr('title', '')
            .empty()
            .append(el.attr('infos'))
            .dialog({

                autoOpen: false,
                closeOnEscape: true,
                resizable: false,
                draggable: false,
                width: 600,
                height: 400,
                modal: true,
                overlay: {
                    backgroundColor: '#000',
                    opacity: 0.7
                }
            }).dialog('open').css({'overflow-x': 'auto', 'overflow-y': 'auto'});
    }

    function showOverlay(n, appendto, callback, zIndex) {

        let div = 'OVERLAY';
        if (typeof (n) !== 'undefined')
            div += n;
        if ($('#' + div).length === 0) {
            if (typeof (appendto) === 'undefined')
                appendto = 'body';
            $(appendto).append('<div id="' + div + '" style="display:none;">&nbsp;</div>');
        }

        let css = {
            display: 'block',
            opacity: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            top: 0,
            zIndex: zIndex,
            left: 0
        };

        if (parseInt(zIndex, 10) > 0)
            css['zIndex'] = parseInt(zIndex, 10);

        if (typeof (callback) !== 'function')
            callback = function () {
            };
        $('#' + div).css(css).addClass('overlay').fadeTo(500, 0.7).bind('click', function () {
            (callback)();
        });
        if (( navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/6/) )) {
            $('select').css({
                visibility: 'hidden'
            });
        }
    }


    function hideOverlay(n) {
        if (( navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/6/) )) {
            $('select').css({
                visibility: 'visible'
            });
        }
        let div = 'OVERLAY';
        if (typeof (n) !== 'undefined')
            div += n;
        $('#' + div).hide().remove();
    }


    // @deprecated
    function manageSession(data, showMessages) {
        if (typeof (showMessages) === 'undefined')
            showMessages = false;

        if (data.status === 'disconnected' || data.status === 'session') {
            disconnected();
            return false;
        }
        if (showMessages) {
            let box = $('#notification_box');
            box.empty().append(data.notifications);

            if (box.is(':visible'))
                fix_notification_height();

            if ($('.notification.unread', box).length > 0) {
                let trigger = $('#notification_trigger');
                $('.counter', trigger)
                    .empty()
                    .append($('.notification.unread', box).length);
                $('.counter', trigger).css('visibility', 'visible');

            }
            else
                $('#notification_trigger .counter').css('visibility', 'hidden').empty();

            if (data.changed.length > 0) {
                let current_open = $('.SSTT.ui-state-active');
                let current_sstt = current_open.length > 0 ? current_open.attr('id').split('_').pop() : false;

                let main_open = false;
                for (let i = 0; i !== data.changed.length; i++) {
                    let sstt = $('#SSTT_' + data.changed[i]);
                    if (sstt.size() === 0) {
                        if (main_open === false) {
                            $('#baskets .bloc').animate({'top': 30}, function () {
                                $('#baskets .alert_datas_changed:first').show();
                            });
                            main_open = true;
                        }
                    }
                    else {
                        if (!sstt.hasClass('active'))
                            sstt.addClass('unread');
                        else {
                            $('.alert_datas_changed', $('#SSTT_content_' + data.changed[i])).show();
                        }
                    }
                }
            }
            if ($.trim(data.message) !== '') {
                if ($('#MESSAGE').length === 0)
                    $('body').append('<div id="#MESSAGE"></div>');
                $('#MESSAGE')
                    .empty()
                    .append('<div style="margin:30px 10px;"><h4><b>' + data.message + '</b></h4></div><div style="margin:20px 0px 10px;"><label class="checkbox"><input type="checkbox" class="dialog_remove" />' + language.hideMessage + '</label></div>')
                    .attr('title', 'Global Message')
                    .dialog({
                        autoOpen: false,
                        closeOnEscape: true,
                        resizable: false,
                        draggable: false,
                        modal: true,
                        close: function () {
                            if ($('.dialog_remove:checked', $(this)).length > 0) {
                                // setTemporaryPref
                                $.ajax({
                                    type: 'POST',
                                    url: '/user/preferences/temporary/',
                                    data: {
                                        prop: 'message',
                                        value: 0
                                    },
                                    success: function (data) {
                                        return;
                                    }
                                });
                            }
                        }
                    })
                    .dialog('open');
            }
        }
        return true;
    }

    return {
        showOverlay,
        hideOverlay,
        manageSession
    };

})(jQuery, p4);

export default commonModule;
