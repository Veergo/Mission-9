const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    fatherNameMale: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемьевич",
            "id_5": "Дмитриевич",
            "id_6": "Романович",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Алексеевич",
            "id_10": "Андреевич"
        }
    }`,

    fatherNameFemale: `{
        "count": 10,
        "list": {
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемьевна",
            "id_5": "Дмитриевна",
            "id_6": "Романовна",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Алексеевна",
            "id_10": "Андреевна"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Екатерина",
            "id_3": "Анастасия",
            "id_4": "Юлия",
            "id_5": "София",
            "id_6": "Яна",
            "id_7": "Анджелика",
            "id_8": "Алина",
            "id_9": "Валентина",
            "id_10": "Василиса"
        }
    }`,

    proffessionMale: `{
        "count": 5,
        "list": {     
            "id_1": "Солдат",
            "id_2": "Слесарь",
            "id_3": "Шахтер",
            "id_4": "Электромонтер",
            "id_5": "Кузнец"
        }
    }`,

    proffessionFemale: `{
        "count": 5,
        "list": {     
            "id_1": "Воспитатель",
            "id_2": "Врач гинеколог",
            "id_3": "Швея",
            "id_4": "Горничная",
            "id_5": "Стюардесса"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },



    randomFatherName: function() {
        if (a > 5) {
            return this.randomValue(this.fatherNameMale);
        }
        return this.randomValue(this.fatherNameFemale);
    },

    randomFirstName: function() {
        if (a > 5){
            return this.randomValue(this.firstNameMaleJson);
        }
        return this.randomValue(this.firstNameFemaleJson); 
    },

     randomSurname: function() {
        if (a > 5){
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'a';
        }
    },

    randomGender: function() {
        if (a > 5){
            return this.GENDER_MALE;
        }
        return this.GENDER_FEMALE;
    },

    randomProffession: function() {
        if (a > 5) {
            return this.randomValue(this.proffessionMale);
        }
        return this.randomValue(this.proffessionFemale);
    },

    randomDateOfBirth: function() {
        return this.randomIntNumber(1990, 2000);
    },

    getPerson: function () {
        this.person = {};
        this.person.date = this.randomDateOfBirth();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.fathername = this.randomFatherName();
        this.person.prof = this.randomProffession();
        return this.person;
    }
};