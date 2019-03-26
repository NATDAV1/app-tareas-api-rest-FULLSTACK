
const environments = {
    production: "production",
    development: "development",
    test: "test"
}
const ENV = process.env.NODE_ENV || environments.development;

const config = {
    [environments.production]: {
        PORT: 80,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost',
            DB: 'Trello'
        }
    },
    [environments.development]: {
        PORT: 3000,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost',
            DB: 'Trello_dev'
        }
    },
    [environments.test]: {
        PORT: 3000,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost',
            DB: 'Trello_test'
        }
    }
}

const CONFIG = config[ENV];
if(!CONFIG) {
    throw new Error(`NODE_ENV=${ENV} is not a valid environment.`);
}

//console.log(CONFIG); //prints only the development portion above
//console.log(process.env) //prints all of the information about the computer & user

process.env = {
    ...process.env,
    ...CONFIG
};
