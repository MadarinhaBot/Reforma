/*
Mudem/Adicionem/Retirem os comandos que estão faltando/Errados.
*/

    .setTitle(`Central de comandos`)
    .setDescription(`Olá <@${message.author.id}>, aqui a baixo estará todos os tipos de categorias dos meus comandos! Basta reagir no emoji em que uma das categorias está!
     1️⃣ Moderação
     2️⃣ Diversão
     3️⃣ informação
     4️⃣ Música`)

//COMANDOS DE MODERAÇÃO

        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de moderação`)
        .setDescription(`\`m!ban\`\n\`m!unban\`\n\`m!say\``)
        .setColor("RANDOM")

//COMANDOS DE DIVERSÃO

        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de diversão`)
        .setDescription(`Em Breve`)
        .setColor("RANDOM")

//COMANDOS DE INFORMAÇÕES SOBRE OS SERVIDORES

        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de informação`)
        .setDescription("`m!ncdark`")
        .setColor("RANDOM")

//COMANDOS DE MUSICA

        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de Música`)
        .setDescription("`m!play`, `m!pause`, `m!resume`, `m!skip`, `m!lyrics`, `m!queue`, `m!np`")
        .setColor("RANDOM")
        
