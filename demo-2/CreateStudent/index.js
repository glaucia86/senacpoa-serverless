const createMongoClient = require('../shared/mongo');

module.exports = async function(context, req) {
    const student =  req.body || {};

    if (student) {
        context.res = {
            status: 400,
            body: 'Student is required!',
        };
    }

    const { client: MongoClient } = await createMongoClient();
    const Students = MongoClient.collection('students');

    try {
        const students = await Students.insert(student);
        context.res = { status: 201, body: students.ops[0] };
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error on insert Student',
        };
    }
};