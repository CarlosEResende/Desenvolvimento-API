import request from 'supertest';
import app from '../app';  

test('deve criar um novo perfil com sucesso', async () => {
    const newProfileData = {
        id: 1,
        firstname: 'João',
        lastname: 'Silva',
        profession: 'Desenvolvedor',
        type: 'Pessoal',
        balance: 1000.00
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

test('Deve Atualizar o Perfil de acordo com o id atribuido', async () =>{

    const id = 1;

    const response = await request(app).put('/api/profiles/:id')

    expect(response.status).toBe(201);

    expect(response.body).toEqual({
        id: 1,
        firstname: 'Maria',
        lastname: 'Silva',
        profession: 'Desenvolvedor',
        type: 'Pessoal',
        balance: 1190.00
    })

    
}
)


