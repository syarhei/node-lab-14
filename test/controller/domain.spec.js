'use strict';

let domain = [
    {
        name: "serg15.murkou.ru",
        cost: 200,
        userName: "sergei"
    },
    {
        name: "serg16.murkou.ru",
        cost: 200,
        userName: "greg"
    }
];

let mockDomain = require('../mock/domain') (domain);

let ControllerDomain = require('../../controllers/session');
let controllerDomain = ControllerDomain(mockDomain);
/*
describe('get domains', () => {
    let request = {
        "body": {

        },
        "params": {

    }
    };
    test('Should call readChunk  function from service', async() =>{
        await controllerDomain({params:{}});
        expect(service.readChunk)
            .toHaveBeenCalledTimes(1);
    });

    test('Should call read  function from service', async() =>{
        await ser.read({params:{}});
        expect(service.read)
            .toHaveBeenCalledTimes(1);
    });
});
*/