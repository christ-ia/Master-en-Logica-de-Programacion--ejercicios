function tablaReductoraEn8 (num){

    let list8 = `--- Del ${num} hasta 0 ---\n`;

    for (let i = num ; i >= 0; i-= 8){
        list8 += `nº ${i}\n`
    }
    list8 += '--- FIN ---'
    return list8;
}
console.log(tablaReductoraEn8(104))