import * as jQuery from 'jquery';

const userModule = (function($){
    function setPref(name, value) {
        if ($.data['pref_' + name] && $.data['pref_' + name].abort) {
            $.data['pref_' + name].abort();
            $.data['pref_' + name] = false;
        }

        $.data['pref_' + name] = $.ajax({
            type: "POST",
            url: "/user/preferences/",
            data: {
                prop: name,
                value: value
            },
            dataType: 'json',
            timeout: function () {
                $.data['pref_' + name] = false;
            },
            error: function () {
                $.data['pref_' + name] = false;
            },
            success: function (data) {
                if (data.success) {
                    humane.info(data.message);
                }
                else {
                    humane.error(data.message);
                }
                $.data['pref_' + name] = false;
                return;
            }
        });
    }

    return {setPref: setPref}
})(jQuery);

export default userModule;


