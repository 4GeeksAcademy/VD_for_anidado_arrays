let pronoun = ['the','our']
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions_domains=['.com','.net','.ar','.io'];
let domain_hacks= ['jogg.er','raco.on'];
for(let i=0;i<pronoun.length;i++){
    for(let j=0;j<adj.length;j++){
        for(let k=0;k<noun.length;k++){
            for(let l=0;l<extensions_domains.length;l++){
            console.log(pronoun[i] + adj[j]+ noun[k] + extensions_domains[l]);
        }
        console.log(pronoun[i] + adj[j]+ domain_hacks[k]);
    }
}
}