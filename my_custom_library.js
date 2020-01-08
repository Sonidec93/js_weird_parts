; (function (global, $) {

    var Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language)
    }
    var avlLang = ['en', 'es'];
    var greetings = {
        'en': 'Hello',
        'es': 'Hola'
    }
    var formal_greetings = {
        'en': 'Greetings',
        'es': 'Saludos'
    }
    Greetr.prototype = {
        validate: function () {
            return avlLang.indexOf(this.language) > -1;
        },

        getFullName: function () {
            console.log(`${this.firstname} ${this.lastname}`);
            return this;
        },
        greet: function () {
            if (this.validate()) {
                console.log(`${greetings[this.language]} ${this.firstname} ${this.lastname}`);
                return this;
            }
            else {
                throw 'This language is not supported';
            }
        },
        greetFormally: function () {
            if (this.validate()) {
                console.log(`${formal_greetings[this.language]} ${this.firstname} ${this.lastname}`);
                return this;
            }
            else {
                throw 'This language is not supported';
            }
        },
        HTMLSelector:function(selector,value){
            if(jQuery){
                $(selector).html(value);
                return this;
            }else{
                throw 'Jquery library is missing';
            }
        }
    };

    Greetr.init = function (firstname, lastname, language) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.language = language;
    }

    var init = Greetr.init;
    init.prototype = Greetr.prototype;

    global.Greetr = Greetr;


}(window, jQuery));  