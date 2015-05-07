var braces = {
    valid: function (input) {
        var stack = 0;
        each(input, function (_, c) {
            switch (c) {
                case '('://入栈
                    stack++;
                    break;
                case ')':
                    var haveNoItems = --stack < 0;//出栈
                    if (haveNoItems) {
                        return false;
                    }
                    break;
            }
        });
        return stack == 0;
    }
};
