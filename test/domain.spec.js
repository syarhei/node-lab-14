/**
 * Created by Sergei on 15.05.2017.
 */

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

let mockDomain = require('./mock/domain') (domain);

let ServiceDomain = require('../services/domain');
let serviceDomain = ServiceDomain(mockDomain);

describe("domains", () => {
    test("add", () => {
        expect(true).toBe(true);
    });
    test("delete", () => {
        expect(true).toBe(true);
    });
});

describe('read domain', () => {
    it('Should returned promise', () => {
        expect(serviceDomain.getDomains())
            .toBeInstanceOf(Promise);
    });
    it('Should returned records', async () => {
        let record = await serviceDomain.getDomains("sergei");
        expect(mockDomain.findAll).toHaveBeenCalled();
        expect(record).toEqual(domain);
    });
    it('Should returned record', async () => {
        serviceDomain.checkDomain("serg15.murkou.ru").then((record) => {
            expect(mockDomain.findById).toHaveBeenCalled();
            console.log("sergei");
            expect(record).toEqual(domain[2]);
        });
    });
/*

    it(`Should returned error,
        if record not found`, async () => {
        expect.assertions(2);

        try {
            await await service.read(9000);
        } catch (error) {

            expect(repository.findById)
                .toHaveBeenCalled();

            expect(error).toEqual(errors.notFound);

        }
    });

    it(`Should returned error,
        if id not Int`, async () => {
        expect.assertions(2);

        try {
            await await service.read('surprise!');
        } catch (error) {

            expect(repository.findById)
                .not.toHaveBeenCalled();

            expect(error).toEqual(errors.invalidId);

        }
    });
    */
});