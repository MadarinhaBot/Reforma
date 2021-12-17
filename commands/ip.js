const discord = require('discord.js')

exports.run = async (client, message, args) => {

 const embed = new discord.MessageEmbed()
     .setTitle("IP dos servidores")
     .setDescription(`**Ip's Rede Dark MCPE**\n\n<:naruto:797908519541932062> **|** **Servidor Naruto Dark**: \n**Ip**: play2.narutocdark.com.br\n**Porta**: 19132\n\n<:Esfera4:879538490650538034> **|** **Servidor Dragon Block Dark**:\n**Ip**: dbpe.narutocdark.com.br\n**Porta**: 19062`)
     .setColor("#4538ff")
message.madaraReply(`${message.author}`, embed)

}
