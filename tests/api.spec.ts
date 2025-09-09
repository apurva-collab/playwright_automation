import { test, expect } from '@playwright/test';

test('Domyshoot -> Get user info API', async ({ request }) => {
    const response = await request.get('https://api-v6.dresma.com/api/v4/users/auth/user/get', {
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGE3MGJmYzgyNzM3Yzc1YmNjM2RjNGQiLCJtb2RlIjoid2ViIiwiaWF0IjoxNzU3MzI3MDI5fQ.9-715Neqk_A-Ip2cgdV-pbTUIWU9kw1X_camuVs7aV0'
    }
})
    expect(response.status()).toBe(200)
    const body = await response.json()
})
test('POST-merge guest user to user', async ({ request }) => {
    const response = await request.post('https://api-v6.dresma.com/api/v4/users/user/mergeGuestUserToUser', {
        headers: {
            Accept: 'application/json',
           // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGE3MGJmYzgyNzM3Yzc1YmNjM2RjNGQiLCJtb2RlIjoid2ViIiwiaWF0IjoxNzU3MzI3MDI5fQ.9-715Neqk_A-Ip2cgdV-pbTUIWU9kw1X_camuVs7aV0'
    },
    data: {
        deviceId: 'UgeRRdHqlqQ-w9K0Y1zWH',
        language: 'en',
        mode: 'web',
        version: 1,
        osType: 'windows',
        build: 1,
        userId: '66a383cded82266bc71e7cb2',
        preferredMethod: 'otp',
        loginChannel: '101010',
        long: 0,
        lat: 0,
        firebaseId: '',
        jobIdForProTouch: '',
        source: '',
        email: 'spd@yopmail.com',
    }
  })
    expect(response.status()).toBe(200);
    const body = await response.json();
})
test('Post-logout-DMS', async({request}) =>{
    const response = await request.post('https://api-v6.dresma.com/api/v4/users/user/signInGuestUser',{
        headers:{
            Accept: 'application/json',      
    },
    data:{
        deviceId:'vy5JFIxzMiCiy-5iswtte',
        mode:'web',
        language:'en'
    }
    })
    expect(response.status()).toBe(200);
    const body = await response.json();
})

    

    



