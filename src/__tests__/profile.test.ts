import request from 'supertest';
import app from '../app';  


beforeAll(async () => {
    await request(app).post('/api/profiles').send({
        firstname: 'João',
        lastname: 'Silva',
        profession: 'Desenvolvedor',
        type: 'Pessoal',
        balance: 1000.00
    });
});

test('deve criar um novo perfil com sucesso', async () => {
    const newProfileData = {
        firstname: 'Ana',
        lastname: 'Santos',
        profession: 'Engenheira',
        type: 'Profissional',
        balance: 2000.00
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

test('deve atualizar um perfil com sucesso', async () => {
    const updatedProfileData = {
        firstname: 'Maria',
        lastname: 'Fernandes',
        profession: 'Designer',
        type: 'Pessoal',
        balance: 1500.00
    };
    const response = await request(app)
        .put('/api/profiles/1')
        .send(updatedProfileData);
    expect(response.status).toBe(200);
    expect(response.body.firstname).toBe(updatedProfileData.firstname);
    expect(response.body.lastname).toBe(updatedProfileData.lastname);
    expect(response.body.profession).toBe(updatedProfileData.profession);
    expect(response.body.type).toBe(updatedProfileData.type);
    expect(response.body.balance).toBe(updatedProfileData.balance);
});

test('deve deletar um perfil com sucesso', async () => {
    const response = await request(app)
        .delete('/api/profiles/1');
    expect(response.status).toBe(204);
});



