// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// cookies.set('myCat', 'Pacman', { path: '/' });
// console.log(cookies.get('myCat')); // Pacman


async function login({email, password}: {email: string, password: string}) {
    const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({email, password})
    })
    const data: {access_token: string, refresh_token: string} = await response.json()
    localStorage.setItem('access_token', data.access_token)

}

async function registration({name, surname, nickname, email, password}:
                                {name: string, surname: string, nickname: string, email: string, password: string}) {

}



export {login, registration}