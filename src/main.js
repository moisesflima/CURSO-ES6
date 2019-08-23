/*const minhaPromise = function(){
    return new Promise(function(resolve,reject){
        setTimeout( function(){resolve('OK')},2000);
    });
};*/

const minhaPromise = () => new Promise((resolve, reject) => { setTimeout(() => { resolve('OK') }, 2000) });


async function executaPromise(){
    const response = await minhaPromise();

    console.log(response)
}

executaPromise();