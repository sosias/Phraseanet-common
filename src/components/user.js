// @TODO enable lints
/* eslint-disable no-undef*/
import * as jQuery from 'jquery';


// @todo import humane
const userModule = (function ($, humane) {
    function setPref(name, value) {
        const prefName = `pref_${name}`;
        if ($.data[prefName] && $.data[prefName].abort) {
            $.data[prefName].abort();
            $.data[prefName] = false;
        }

        $.data[prefName] = $.ajax({
            type: 'POST',
            url: '/user/preferences/',
            data: {
                prop: name,
                value
            },
            dataType: 'json',
            timeout: $.data[prefName] = false,
            error: $.data[prefName] = false,
            success: (data) => {
                if (data.success) {
                    humane.info(data.message);
                } else {
                    humane.error(data.message);
                }
                $.data[prefName] = false;
                return;
            }
        });
    }

    return { setPref };
})(jQuery, humane);

export default userModule;


