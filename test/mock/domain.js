/**
 * Created by Sergei on 15.05.2017.
 */

'use strict';

module.exports = (data) => {
    const mock = {
        findAll: jest.fn((params) => Promise.resolve(data)),
        findById: jest.fn((id) =>
            Promise((resolve, reject) => {
                let element = null;
                data.forEach((i, index) => {
                    if (data[index].name == id) element = data[index];
                });
                if (element != null) resolve(element);

                else reject({ error: "Not found id"});
            })
        )
    };

    mock.mockClear = () => {
        mock.findAll.mockClear();
        mock.findById.mockClear();
    };

    return mock;
};