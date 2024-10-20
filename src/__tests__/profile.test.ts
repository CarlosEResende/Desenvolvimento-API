import request from 'supertest';
import app from '../app';  

test('deve criar um novo perfil com sucesso', async () => {
    const newProfileData = {
        id: 1,
        firstname: 'Marina',
        lastname: 'Santos',
        profession: 'Desenvolvedora',
        type: 'Sem Tipo',
        balance: 1890.00
    };

    const response = await request(app)
        .post('/api/profiles')
        .send(newProfileData);

    expect(response.status).toBe(201); 
    expect(response.body.firstname).toBe(newProfileData.firstname);
    expect(response.body.lastname).toBe(newProfileData.lastname);
    expect(response.body.profession).toBe(newProfileData.profession);
    expect(response.body.type).toBe(newProfileData.type);
    expect(response.body.balance).toBe(newProfileData.balance);
});




